// Guides index. Each guide lives in its own file in lib/guides/ (this folder).
// To publish a new guide: create lib/guides/<slug>.ts exporting `guide`,
// import it below, and add it to the GUIDES array (newest first).
// The /guides index, the sitemap, and related links on service pages update automatically.

import type { Guide } from "./types";
import { guide as airbnbVrboTips } from "./airbnb-vrbo-photography-tips";
import { guide as photographyCost } from "./how-much-does-real-estate-photography-cost";
import { guide as rentHousePhotos } from "./rent-house-listing-photos";
import { guide as droneLand } from "./drone-photography-for-land-listings";

export type { Guide } from "./types";

export const GUIDES: Guide[] = [airbnbVrboTips, photographyCost, rentHousePhotos, droneLand].sort(
  (a, b) => b.published.localeCompare(a.published),
);

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
