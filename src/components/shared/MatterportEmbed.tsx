export function MatterportEmbed({
    src = "https://my.matterport.com/show/?m=K9itoiRPo3G"
}: {
    src?: string
}) {
    return (
        <div className="relative w-full overflow-hidden rounded-lg bg-neutral-900 pt-[56.25%] shadow-xl">
            <iframe
                src={src}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
                title="Matterport 3D Tour"
            />
        </div>
    )
}
