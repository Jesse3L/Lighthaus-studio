import Image from "next/image"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="bg-neutral-900 py-20 md:py-28">
      <div className="container-custom grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md md:max-w-none">
          <Image
            src="/images/about/natalie-lighthaus-studio-photographer.jpg"
            alt="Natalie, owner and lead real estate photographer at Lighthaus Studio"
            fill
            sizes="(max-width: 768px) 80vw, 40vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">Natalie shoots every listing herself</h2>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-neutral-200">
            Every photo, video, 3D tour, and drone flight from Lighthaus Studio is shot and edited by Natalie. Canon R8 for
            stills and video, a Matterport Pro3 for tours, and her own FAA Part 107 license for aerials. No subcontractors and
            no stranger showing up at your seller&apos;s door.
          </p>
          <p className="mt-4 max-w-[60ch] leading-relaxed text-neutral-400">
            She started Lighthaus because the right light and the right angle can make a 1,600-square-foot starter home feel
            like a place a buyer can picture living. Most of the work happens in{" "}
            <Link href="/real-estate-photography-clovis-nm" className="text-neutral-200 underline decoration-accent underline-offset-4">Clovis and Eastern New Mexico</Link>{" "}
            and{" "}
            <Link href="/real-estate-photography-lubbock-tx" className="text-neutral-200 underline decoration-accent underline-offset-4">Lubbock and the South Plains</Link>, with
            regular trips to the towns in between.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex h-11 items-center rounded-md border border-neutral-600 px-6 text-sm font-semibold text-neutral-100 transition-colors hover:border-neutral-300"
          >
            More about Natalie
          </Link>
        </div>
      </div>
    </section>
  )
}
