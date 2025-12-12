import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import Organizer from '@/models/Organizer'
import { headers } from 'next/headers'

export async function GET(request: Request) {
    try {
        await dbConnect()

        const headersList = headers()
        const requesterEmail = headersList.get('x-user-email')

        if (!requesterEmail) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Hardcoded superadmin access
        if (requesterEmail === 'admin@rcs.com') {
        } else {
            const organizer = await Organizer.findOne({ email: requesterEmail })
            
            if (!organizer) {
                 return NextResponse.json({ error: 'Forbidden: Organizer access required' }, { status: 403 })
            }
        }
        
        // 3. Fetch all Attendees (Users)
        const users = await User.find({ role: 'attendee' }).sort({ registeredAt: -1 })

        const sanitizedUsers = users.map(user => {
            const { _id, password, ...rest } = (user.toObject() as any) as any
            return { id: _id.toString(), ...rest }
        })

        return NextResponse.json(sanitizedUsers, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}