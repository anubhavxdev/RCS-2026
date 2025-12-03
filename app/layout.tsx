import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
 
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/FooterSection'
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'RCS CTF 2026',
    description:
        'The "Republic of Cyber Sentinels CTF 2026" (RCSCTF26) is a two-day Capture the Flag (CTF) competition organized by EncryptEdge, scheduled to take place at Lovely Professional University (LPU). The event is set around the theme of the Republic Day of India and is planned for January 26th to 27th, 2026, spanning 24 hours. It is an offline event, held on the LPU campus, and allows teams with a maximum of four members each. Students from universities across India, including LPU students, are invited to participate in this dynamic competition.',
    keywords: ['rcsctf', 'rcsctf26', 'rcsctf2026', 'rcsctf 2026', 'rcsctf 26', 'ctf', 'encryptedge', 'lpu', 'lovely professional university', 'cyber security', 'cybersecurity', 'cyber', 'security', 'cyber security club', 'cyber security club lpu', 'cyber security club lovely professional university', 'cyber security club lpu jalandhar', 'cyber security club lovely professional university jalandhar', 'cyber security club lpu punjab', 'cyber security club lovely professional university punjab', 'cyber security club lpu india', 'cyber security club lovely professional university india', 'cyber security club lpu 2026', 'cyber security club lovely professional university 2026', 'cyber security club lpu jalandhar 2026', 'cyber security club lovely professional university jalandhar 2026', 'cyber security club lpu punjab 2026', 'cyber security club lovely professional university punjab 2026', 'cyber security club lpu india 2026', 'cyber security club lovely professional university india 2026'],
    publisher: 'EncryptEdge',
    creator: 'EncryptEdge',
    authors: [
        {
            name: "Jyotirmoy Bandyopadhayaya",
            url: "https://b68.dev"
        },{
            name: "Chirag Bhalotia",
            url: "https://chirag.codes"
        }
    ],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    generator: 'Next.js',
    themeColor: '#3a1e3e',
    metadataBase: new URL('https://rcs.encryptedge.in'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        images: '/banner.webp',
        type: 'website',
        locale: 'en_US',
        description:
        'The "Republic of Cyber Sentinels CTF 2026" (RCSCTF26) is a two-day Capture the Flag (CTF) competition organized by EncryptEdge, scheduled to take place at Lovely Professional University (LPU). The event is set around the theme of the Republic Day of India and is planned for January 26th to 27th, 2026, spanning 24 hours. It is an offline event, held on the LPU campus, and allows teams with a maximum of four members each. Students from universities across India, including LPU students, are invited to participate in this dynamic competition.',
        title: 'RCS CTF 2026',
        siteName: 'RCS CTF 2026',
        url: 'https://rcs.encryptedge.in',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RCS CTF 2026',
        description: 'The "Republic of Cyber Sentinels CTF 2026" (RCSCTF26) is a two-day Capture the Flag (CTF) competition organized by EncryptEdge, scheduled to take place at Lovely Professional University (LPU). The event is set around the theme of the Republic Day of India and is planned for January 26th to 27th, 2026, spanning 24 hours. It is an offline event, held on the LPU campus, and allows teams with a maximum of four members each. Students from universities across India, including LPU students, are invited to participate in this dynamic competition.',
        creator: '@Encrypt_Edge',
        images: ['https://rcs.encryptedge.in/banner.webp'],
    },
    category: 'technology'
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`text-text bg-background`}>
                {/* Fixed video background for entire website */}
                <video
                    className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                    src="/back.mp4"
                    autoPlay
                    loop
                    
                    playsInline
                />
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 -z-10" />
                <Navbar />
                {children}
                <FooterSection />
                <Analytics />
                <Toaster />
                {/* <RegisterDialog /> */}
            </body>
        </html>
    )
}
