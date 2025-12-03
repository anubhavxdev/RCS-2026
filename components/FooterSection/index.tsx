import React from 'react'
import { Twitter, Instagram, Facebook, GitHub } from 'react-feather'
import { Discord, Whatsapp } from '@/components/ui/Icons'

const FooterSection: React.FC = () => {
    return (
        <footer className="flex gap-5 flex-col md:flex-row items-center justify-between w-screen p-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div>
                <p className="text-3xl mb-3">Follow Us:</p>
                <div className="icons flex flex-wrap max-w-full items-center gap-5">
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://s.encryptedge.in/fb"
                    >
                        <Facebook height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://s.encryptedge.in/ig"
                    >
                        <Instagram height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://s.encryptedge.in/x"
                    >
                        <Twitter height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://s.encryptedge.in/dc"
                    >
                        <Discord height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://s.encryptedge.in/wc"
                    >
                        <Whatsapp height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://s.encryptedge.in/gh"
                    >
                        <GitHub height={30} width={30} />
                    </a>
                </div>
            </div>
            <div className="contact-us lg:text-right">
                {/* Add your contact email here */}
                <p className="text-3xl font-bold">Queries</p>
                <p className="text-3xl">
                    Mail us at:{' '}
                    <a
                        className="text-primary"
                        href="mailto:rcs26@encryptedge.in"
                    >
                        encryptedge@gmail.com
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default FooterSection
