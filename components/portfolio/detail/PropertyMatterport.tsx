export function PropertyMatterport({ url, title }: { url: string; title: string }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">3D Walkthrough</h2>
            <div className="relative w-full aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden shadow-xl border border-neutral-800">
                <iframe
                    src={url}
                    title={title}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                />
            </div>
        </section>
    );
}