import { defineField, defineType } from "sanity";

export const homepageSettingsType = defineType({
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",
  // Singleton — only one document of this type should ever exist.
  // The custom desk structure in sanity.config.ts enforces this.
  fields: [
    defineField({
      name: "selectedWork",
      title: "Selected Work",
      type: "array",
      description:
        "Choose up to 6 photos to feature in the 'Selected Work' section on the homepage. Drag to reorder. The first and fourth images display wide (16:9); the rest display tall (4:5).",
      validation: (r) => r.max(6),
      of: [
        {
          type: "object",
          name: "selectedPhoto",
          title: "Selected Photo",
          fields: [
            defineField({
              name: "property",
              title: "Property",
              type: "reference",
              to: [{ type: "property" }],
              description: "Which property does this photo come from?",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              description: "Pick a specific photo from this property shoot.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description:
                "Short caption shown on hover (e.g. 'Open Concept Living'). Defaults to property title if left blank.",
            }),
            defineField({
              name: "category",
              title: "Category Tag",
              type: "string",
              options: {
                list: [
                  { title: "Interior", value: "Interior" },
                  { title: "Exterior", value: "Exterior" },
                  { title: "Aerial", value: "Aerial" },
                  { title: "Kitchen", value: "Kitchen" },
                  { title: "Living", value: "Living" },
                  { title: "Bedroom", value: "Bedroom" },
                  { title: "Bathroom", value: "Bathroom" },
                  { title: "3D Tour", value: "3D Tour" },
                ],
              },
              initialValue: "Interior",
            }),
          ],
          preview: {
            select: {
              label: "label",
              category: "category",
              propertyTitle: "property.title",
              media: "image",
            },
            prepare({ label, category, propertyTitle, media }) {
              return {
                title: label || propertyTitle || "Untitled",
                subtitle: category || "Interior",
                media,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage Settings" };
    },
  },
});
