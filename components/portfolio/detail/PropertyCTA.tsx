import Link from "next/link"

export function PropertyCTA({ propertyTitle }: { propertyTitle: string }) {
    return (
        <section className="py-16 md:py-24 border-t border-neutral-800 mt-16 bg-black">
            <div className="max-w-2xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to book your shoot?</h2>
                <p className="text-neutral-400 mb-8">48-hour delivery. Packages from $199. Book Natalie for your next listing in West Texas or Eastern NM.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition"
                    >
                        Get a Quote
                    </Link>
                    <Link 
                        href="/pricing" 
                        className="inline-flex items-center justify-center px-6 py-3 text-white hover:text-neutral-300 transition"
                    >
                        See Packages &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}