import { defineField, defineType } from "sanity";

export const agentType = defineType({
  name: "agent",
  title: "Agent",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "jobTitle", type: "string", validation: (r) => r.required() }),
    defineField({ name: "brokerage", type: "string", validation: (r) => r.required() }),
    defineField({ name: "brokerageCity", type: "string" }),
    defineField({ name: "brokerageState", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "headshot",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "headshotAlt",
      type: "string",
      description: "Alt text for the headshot",
    }),
    defineField({
      name: "bio",
      type: "text",
      rows: 8,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "specialties",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "areasServed",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "social", type: "agentSocialLinks" }),
  ],
  preview: {
    select: { title: "name", subtitle: "brokerage", media: "headshot" },
  },
});
