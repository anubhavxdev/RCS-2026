import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import Organizer from '@/models/Organizer'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
    try {
        await dbConnect()
        const body = await request.json() as { name?: string; email?: string; password?: string; contact_no?: string; where_you_reside?: string; team_name?: string; team_members?: any[] }

        if (!body.email || !body.password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
        }

        // 1. Check if user already exists in User collection
        const existingUser = await User.findOne({ email: body.email })
        if (existingUser) {
            return NextResponse.json(
                { error: 'User already registered' },
                { status: 400 }
            )
        }

        // 2. Check if user is already an Organizer
        const existingOrg = await Organizer.findOne({ email: body.email })
        if (existingOrg) {
            return NextResponse.json(
                { error: 'You are an registered Organizer. Please login directly.' },
                { status: 400 }
            )
        }
        
        // 3. Safety check: prevent registering as admin email
        if (body.email === 'admin@rcs.com') {
            return NextResponse.json({ error: 'Cannot register as reserved admin email' }, { status: 403 })
        }

        // 4. Hash Password
        const hashedPassword = await bcrypt.hash(body.password, 10)

        // 5. Create user
        const user = await User.create({
            ...body,
            password: hashedPassword,
            role: 'attendee'
        })

        // Mongoose's create may return a document or an array of documents depending on input
        const created = Array.isArray(user) ? user[0] : user
        const { _id, password: _p, ...rest } = (created as any).toObject() as any
        const userData = { id: _id.toString(), ...rest }

        return NextResponse.json({ success: true, user: userData }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}