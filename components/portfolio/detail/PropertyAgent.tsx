export function PropertyAgent({ agentSlug }: { agentSlug: string }) {
    return (
        <section className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-2">Listed by</h2>
            <p className="text-neutral-400">Listed by {agentSlug} (Agent profiles coming soon)</p>
        </section>
    );
}