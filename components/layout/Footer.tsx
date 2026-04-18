import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, MapPin, Star } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "natalie@lighthausstudio.com"

  return (
    <footer className="bg-[#050505] py-12 md:py-20 text-neutral-400 border-t border-white/5">
      <div className="container-custom grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-12 lg:gap-20">
        {/* Brand + social */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="inline-flex items-center group md:-ml-2">
            <Image
              src="/images/brand/lighthaus-logo.png"
              alt="Lighthaus Studio"
              width={256}
              height={256}
              className="w-32 md:w-48 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://www.instagram.com/thelighthausstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lighthaus Studio on Instagram"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/lighthausstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lighthaus Studio on Facebook"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://share.google/1tkTwCY4ZBdHVCHEQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lighthaus Studio on Google"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <MapPin className="h-5 w-5" />
            </a>
            <a
              href="https://g.page/r/CUiuqaVKRFWKEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave a Google review"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Star className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h3 className="mb-3 md:mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Services</h3>
          <ul className="space-y-2 md:space-y-4 text-sm">
            <li><Link href="/services" className="hover:text-white transition-colors">HDR Photography</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Cinematic Video</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Matterport 3D</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Drone / Aerial</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Virtual Staging</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="col-span-1">
          <h3 className="mb-3 md:mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
          <ul className="space-y-2 md:space-y-4 text-sm">
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Investment / Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Book a Shoot</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="mb-3 md:mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="space-y-2 md:space-y-4 text-sm">
            <li className="flex items-start">
              <span className="block w-20 md:w-24 text-neutral-600 flex-shrink-0">Studio</span>
              <span className="text-white">Muleshoe, TX 79347</span>
            </li>
            <li className="flex items-start">
              <span className="block w-20 md:w-24 text-neutral-600 flex-shrink-0">Email</span>
              <a href={`mailto:${email}`} className="hover:text-white transition-colors text-white break-all">
                {email}
              </a>
            </li>
            <li className="flex items-start">
              <span className="block w-20 md:w-24 text-neutral-600 flex-shrink-0">Phone</span>
              <a href="tel:+18063419922" className="hover:text-white transition-colors text-white">
                (806) 341-9922
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5">
        <p className="text-center text-neutral-500 text-xs md:text-sm mb-4 md:mb-8 max-w-4xl mx-auto">
          Real estate photography, video, and 3D tours for agents and property owners in Muleshoe, Lubbock, Texas, and Clovis, New Mexico.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-1 md:gap-2">
          <p className="text-center">&copy; {currentYear} Lighthaus Studio. All rights reserved.</p>
          <p className="text-center">Designed &amp; Developed by Antigravity.</p>
        </div>
      </div>
    </footer>
  )
}
