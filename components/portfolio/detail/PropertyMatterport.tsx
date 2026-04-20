export function PropertyMatterport({ urls, url, title }: { urls?: string[]; url?: string; title: string }) {
    const validUrls = urls || (url ? [url] : []);
    if (validUrls.length === 0) return null;

    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">3D Walkaround{validUrls.length > 1 ? 's' : ''}</h2>
            <div className="space-y-8">
                {validUrls.map((u, i) => (
                    <div key={u} className="relative w-full aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden shadow-xl border border-neutral-800">
                        <iframe
                            src={u}
                            title={`${title} - Tour ${i + 1}`}
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            referrerPolicy="no-referrer"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}