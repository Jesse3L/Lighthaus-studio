"use client";

/**
 * Studio route. Catch-all dynamic segment handles Sanity's internal routing.
 * Marked "use client" explicitly — NextStudio relies on React Context which
 * must not be evaluated in an SSR/RSC context.
 * Metadata lives in the parent layout.tsx (Server Component).
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
