import { defineField, defineType } from "sanity";

export const agentSocialLinksType = defineType({
  name: "agentSocialLinks",
  title: "Agent Social Links",
  type: "object",
  fields: [
    defineField({ name: "instagram", type: "url" }),
    defineField({ name: "facebook", type: "url" }),
    defineField({ name: "linkedin", type: "url" }),
    defineField({ name: "website", type: "url" }),
  ],
});
