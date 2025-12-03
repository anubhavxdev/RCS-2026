import React from 'react'

function PerksSection() {
    return (
        <section className="flex flex-col lg:h-screen justify-between pt-24">
            <h2 className='mx-auto text-5xl font-medium my-10 text-center'>
                Prepare for the ultimate <br /> test of
                <span className="text-primary"> Cyber Prowess</span>
            </h2>
            <div className="perksCard p-10 text-black bg-white flex gap-5 max-w-xl ml-auto">
                <div className="text-7xl font-semibold">01</div>
                <div className="">
                    <h2 className="text-3xl font-medium">CTF Perks</h2>
                    <p>
                    Participant stand a chance to win various rewards , and certificates, enhancing their reputation and opening up career opportunities.
                    </p>
                </div>
            </div>
            <div className="perksCard p-10 text-black bg-white flex gap-5 max-w-xl mr-auto">
                <div className="text-7xl font-semibold">02</div>
                <div className="">
                    <h2 className="text-3xl font-medium">Real-Life Scenarios:</h2>
                    <p>
                    Engaging in practical, hands-on experiences with real-world cybersecurity challenges helps in skill development and refinement.
                    </p>
                </div>
            </div>
            <div className="perksCard p-10 text-black bg-white flex gap-5 max-w-xl ml-auto">
                <div className="text-7xl font-semibold">03</div>
                <div className="">
                    <h2 className="text-3xl font-medium">Sessions by Industry Leaders</h2>
                    <p>
                    Attending sessions led by experts in cybersecurity offers insights into the latest industry trends and valuable networking opportunities
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PerksSection
