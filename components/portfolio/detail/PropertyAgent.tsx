import Link from "next/link";
import { getAgentBySlug } from "@/lib/agents";
import { AgentAvatar } from "@/components/agents/AgentAvatar";

export function PropertyAgent({ agentSlug }: { agentSlug: string }) {
    const agent = getAgentBySlug(agentSlug);

    if (!agent) {
        return null;
    }

    return (
        <section className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-6">Listing Agent</h2>
            
            <div className="flex items-center gap-6">
                <AgentAvatar agent={agent} size="md" />
                <div>
                    <h3 className="text-lg font-semibold text-white">Listed by {agent.name}</h3>
                    <p className="text-sm text-neutral-400 mb-2">{agent.brokerage}</p>
                    <Link 
                        href={`/agents/${agent.slug}`} 
                        className="text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        See all of {agent.name.split(' ')[0]}'s listings →
                    </Link>
                </div>
            </div>
        </section>
    );
}