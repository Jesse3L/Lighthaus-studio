"use client";

import { useState } from "react";
import Image from "next/image";
import { Agent } from "@/lib/agents";

interface Props {
  agent: Agent;
  size?: "sm" | "md" | "lg";
}

export function AgentAvatar({ agent, size = "md" }: Props) {
  const [errored, setErrored] = useState(false);
  const initials = agent.name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
  const px = size === "sm" ? 48 : size === "lg" ? 192 : 96;

  if (errored) {
    return (
      <div 
        className="rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center font-semibold"
        style={{ width: px, height: px, fontSize: px * 0.36 }}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={agent.headshot.src}
      alt={agent.headshot.alt}
      width={px}
      height={px}
      className="rounded-full object-cover"
      onError={() => setErrored(true)}
      style={{ width: px, height: px }}
    />
  );
}
