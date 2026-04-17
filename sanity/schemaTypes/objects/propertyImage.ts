import { defineField, defineType } from "sanity";

export const propertyImageType = defineType({
  name: "propertyImage",
  title: "Property Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Descriptive alt text for SEO and accessibility. Include city + property + shot type.",
      validation: (r) => r.required().min(10).max(150),
    }),
  ],
  preview: {
    select: { media: "image", title: "alt" },
  },
});
