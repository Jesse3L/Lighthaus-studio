import { PropertyFacts as PropertyFactsType } from "@/lib/properties"

export function PropertyFacts({ facts }: { facts: PropertyFactsType }) {
    const data = [
        { label: "Beds", value: facts.beds },
        { label: "Baths", value: facts.baths },
        { label: "Sq Ft", value: facts.sqft },
        { label: "Lot Size", value: facts.lotSize },
        { label: "Year Built", value: facts.yearBuilt },
    ].filter(f => f.value !== undefined);

    if (data.length === 0) return null;

    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-neutral-900/40 p-8 rounded-lg border border-neutral-800">
                {data.map((item, i) => (
                    <div key={i} className="flex flex-col">
                        <span className="text-3xl font-light text-white">{item.value}</span>
                        <span className="text-sm font-medium uppercase tracking-wider text-neutral-500 mt-1">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}