import { defineField, defineType } from "sanity";

export const propertyType = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "city",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "state",
      type: "string",
      validation: (r) => r.required().max(2),
    }),
    defineField({
      name: "propertyType",
      type: "string",
      description: "e.g. Single Family Home, Ranch, Airbnb",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: { list: ["Real Estate", "Airbnb"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "services",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Photography", value: "photography" },
          { title: "Video", value: "video" },
          { title: "Matterport 3D", value: "matterport" },
          { title: "Drone", value: "drone" },
          { title: "Floor Plan", value: "floorplan" },
        ],
      },
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortDescription",
      type: "string",
      validation: (r) => r.required().max(160),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "propertyImage" }],
      validation: (r) => r.required().min(1).max(60),
      description: "First image is the hero. 25–50 images ideal.",
    }),
    defineField({ name: "videoUrl", type: "url" }),
    defineField({ name: "matterportUrl", type: "url" }),
    defineField({ name: "floorPlanImage", type: "propertyImage" }),
    defineField({ name: "facts", type: "propertyFacts" }),
    defineField({
      name: "agent",
      type: "reference",
      to: [{ type: "agent" }],
    }),
    defineField({ name: "shotDate", type: "date" }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
  ],
  orderings: [
    {
      title: "Featured first, then recent",
      name: "featuredThenRecent",
      by: [
        { field: "featured", direction: "desc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "city", media: "images.0.image" },
  },
});
