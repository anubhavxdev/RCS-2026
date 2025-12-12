import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import Organizer from '@/models/Organizer'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
    try {
        await dbConnect()
        const body = await request.json() as { email?: string; password?: string }
        const email = body.email ?? ''
        const rawPassword = body.password ?? ''

        const ADMIN_EMAIL = process.env.ADMIN_EMAIL
        const ADMIN_PASS = process.env.ADMIN_PASS

        // 1. Super Admin Hardcoded Backdoor (Using Env Vars)
        if (ADMIN_EMAIL && email === ADMIN_EMAIL) {
            if (ADMIN_PASS && rawPassword === ADMIN_PASS) {
                
                // Check if admin exists in DB to allow profile updates
                const existingAdmin = await User.findOne({ email: ADMIN_EMAIL })
                
                if (!existingAdmin) {
                    // Bootstrap Admin in DB if not exists
                    const hashedPassword = await bcrypt.hash(ADMIN_PASS, 10)
                    const newAdmin = await User.create({
                        email: ADMIN_EMAIL,
                        password: hashedPassword,
                        role: 'superadmin',
                        name: 'Super Admin',
                        team_name: 'HQ',
                        contact_no: '0000000000',
                        where_you_reside: 'HQ'
                    })
                    const { _id, password, ...rest } = newAdmin.toObject() as any
                    const adminData = { id: _id.toString(), ...rest }
                    return NextResponse.json(adminData, { status: 200 })
                }
                
                // If admin exists, fall through to standard User check to allow DB updates
            } else {
                return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 })
            }
        }

        // 2. Check Organizer Collection First
        let organizer = await Organizer.findOne({ email })

        if (organizer) {
            // Scenario: First time login (Password not set)
            if (!organizer.password) {
                const hashedPassword = await bcrypt.hash(rawPassword, 10)
                organizer.password = hashedPassword
                await organizer.save()
                
                // Login successful after setting password
                const { _id, password, ...rest } = organizer.toObject() as any
                const orgData = { id: _id.toString(), ...rest }
                return NextResponse.json(orgData, { status: 200 })
            }

            // Scenario: Regular Organizer Login
            const isMatch = await bcrypt.compare(rawPassword, organizer.password as string)
            if (!isMatch) {
                return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
            }

            const { _id, password, ...rest } = organizer.toObject() as any
            const orgData = { id: _id.toString(), ...rest }
            return NextResponse.json(orgData, { status: 200 })
        }

        // 3. Check User Collection (Attendees & Bootstrapped Superadmin)
        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json(
                { error: 'User not found. Please register first.' },
                { status: 404 }
            )
        }

        if (!user.password) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }
        const isMatch = await bcrypt.compare(rawPassword, user.password)
        if (!isMatch) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        const { _id, password, ...rest } = user.toObject() as any
        const userData = { id: _id.toString(), ...rest }
        return NextResponse.json(userData, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}