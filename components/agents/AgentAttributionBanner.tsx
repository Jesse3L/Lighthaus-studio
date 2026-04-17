import Link from "next/link";
import { Agent } from "@/lib/agents";
import { AgentAvatar } from "@/components/agents/AgentAvatar";

export function AgentAttributionBanner({ agent }: { agent: Agent }) {
  return (
    <div className="w-full bg-neutral-900 border-b border-neutral-800 px-4 py-3">
      <div className="container-custom flex items-center justify-center sm:justify-start gap-4">
        <AgentAvatar agent={agent} size="sm" />
        <div className="text-sm">
          <div className="text-neutral-400">
            Listed by <span className="font-semibold text-white">{agent.name}</span> — {agent.brokerage}
          </div>
          <Link 
            href={`/agents/${agent.slug}`} 
            className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors mt-0.5 inline-block"
          >
            View Agent Profile →
          </Link>
        </div>
      </div>
    </div>
  );
}
