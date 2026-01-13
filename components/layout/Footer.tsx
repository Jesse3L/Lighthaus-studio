import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-[#050505] py-20 text-neutral-400 border-t border-white/5">
            <div className="container-custom grid gap-12 md:grid-cols-4 lg:gap-20">
                <div className="md:col-span-1 space-y-2">
                    <Link href="/" className="flex items-center group -ml-2">
                        <img
                            src="/Images/Lighthaus Logo.png"
                            alt="Lighthaus Studio"
                            className="w-64 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </Link>
                    <div className="flex gap-4 pt-4">
                        {/* Social Placeholders */}
                        <div className="h-8 w-8 bg-neutral-800 rounded-full hover:bg-accent transition-colors" />
                        <div className="h-8 w-8 bg-neutral-800 rounded-full hover:bg-accent transition-colors" />
                        <div className="h-8 w-8 bg-neutral-800 rounded-full hover:bg-accent transition-colors" />
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Services</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/services" className="hover:text-white transition-colors">HDR Photography</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Cinematic Video</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Matterport 3D</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Drone / Aerial</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Virtual Staging</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
                        <li><Link href="/pricing" className="hover:text-white transition-colors">Investment / Pricing</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Book a Shoot</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Journal</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <span className="block w-24 text-neutral-600">Studio</span>
                            <span className="text-white">Muleshoe, TX 79347</span>
                        </li>
                        <li className="flex items-start">
                            <span className="block w-24 text-neutral-600">Email</span>
                            <a href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`} className="hover:text-white transition-colors text-white">
                                {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "natalie@lighthausstudio.com"}
                            </a>
                        </li>
                        <li className="flex items-start">
                            <span className="block w-24 text-neutral-600">Phone</span>
                            <a href="tel:8068939691" className="hover:text-white transition-colors text-white">
                                806-893-9691
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom mt-16 pt-8 border-t border-white/5">
                <p className="text-center text-neutral-500 text-sm mb-8 max-w-4xl mx-auto">
                    Premium real estate media for Muleshoe, Lubbock, Texas, and Clovis, New Mexico. Elevating listings with cinematic quality.
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
                    <p>&copy; {new Date().getFullYear()} Lighthaus Studio. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Developed by Antigravity.</p>
                </div>
            </div>
        </footer>
    )
}
