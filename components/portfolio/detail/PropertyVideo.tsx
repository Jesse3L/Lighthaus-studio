export function PropertyVideo({ url, title }: { url: string; title: string }) {
    const embedUrl = url.includes("youtube.com/watch?v=") 
        ? url.replace("youtube.com/watch?v=", "youtube.com/embed/")
        : url;

    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">Video Tour</h2>
            <div className="relative w-full aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden shadow-xl border border-neutral-800">
                <iframe
                    src={embedUrl}
                    title={title}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                />
            </div>
        </section>
    );
}