import { defineField, defineType } from "sanity";

// A single photo used somewhere on the site, with alt text for Google and screen readers.
export const sitePhotoType = defineType({
  name: "sitePhoto",
  title: "Photo",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      description:
        "Upload a high-resolution photo (at least 2000px wide). After uploading, click the crop icon and drag the circle onto the most important part of the photo so it stays in frame on phones.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "alt",
      title: "Photo description (alt text)",
      type: "string",
      description:
        "Describe what's in the photo and where, e.g. 'Bright kitchen with white cabinets in a Clovis, NM home'. This helps the photo show up in Google.",
      validation: (r) => r.required().min(10).max(150),
    }),
  ],
  preview: {
    select: { media: "image", title: "alt" },
    prepare: ({ media, title }) => ({ media, title: title || "Add a photo" }),
  },
});
