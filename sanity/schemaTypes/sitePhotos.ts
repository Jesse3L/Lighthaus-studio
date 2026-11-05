import { defineArrayMember, defineField, defineType } from "sanity";
import { SERVICE_AREAS } from "../../lib/service-areas";

// One document that controls the photos used around the website.
// Any slot left empty keeps showing the site's built-in photo, so nothing ever breaks.
export const sitePhotosType = defineType({
  name: "sitePhotos",
  title: "Site Photos",
  type: "document",
  groups: [
    { name: "home", title: "Home page", default: true },
    { name: "services", title: "Services page" },
    { name: "pages", title: "About, Lubbock & Airbnb pages" },
    { name: "towns", title: "Town pages" },
  ],
  fields: [
    // Home
    defineField({
      name: "heroSlides",
      title: "Home page slideshow",
      group: "home",
      type: "array",
      description:
        "The big full-screen photos at the top of the home page. Add 2 to 6 of your best shots; exteriors and bright living rooms work best. Drag to reorder — the first photo shows first.",
      validation: (r) => r.min(1).max(6),
      of: [
        defineArrayMember({
          type: "object",
          name: "heroSlide",
          fields: [
            defineField({ name: "photo", title: "Photo", type: "sitePhoto", validation: (r) => r.required() }),
            defineField({
              name: "label",
              title: "Short label",
              type: "string",
              description: "Used by screen readers for the little thumbnail buttons, e.g. 'Kitchen' or 'Exterior'.",
              validation: (r) => r.max(30),
            }),
          ],
          preview: {
            select: { media: "photo.image", title: "label", subtitle: "photo.alt" },
            prepare: ({ media, title, subtitle }) => ({ media, title: title || "Slide", subtitle }),
          },
        }),
      ],
    }),
    defineField({
      name: "ctaBackground",
      title: "Bottom-of-page banner",
      group: "home",
      type: "sitePhoto",
      description: "The darkened photo behind the 'Request a quote' banner at the bottom of most pages.",
    }),
    defineField({
      name: "aboutPhoto",
      title: "Natalie's photo",
      group: "home",
      type: "sitePhoto",
      description: "Shown on the home page and the About page. A vertical (portrait) photo works best.",
    }),

    // Services
    defineField({ name: "hdrPhoto", title: "HDR photography", group: "services", type: "sitePhoto" }),
    defineField({ name: "videoPhoto", title: "Walkthrough video", group: "services", type: "sitePhoto" }),
    defineField({ name: "dronePhoto", title: "Drone / aerial", group: "services", type: "sitePhoto", description: "Ideally an actual aerial shot." }),
    defineField({ name: "matterportPhoto", title: "Matterport 3D tours", group: "services", type: "sitePhoto", description: "A dollhouse screenshot or a wide room works well." }),
    defineField({ name: "floorPlanPhoto", title: "Floor plan example", group: "services", type: "sitePhoto", description: "Also shown in the services list on the home page." }),

    // Other pages
    defineField({ name: "lubbockHero", title: "Lubbock page photo", group: "pages", type: "sitePhoto" }),
    defineField({ name: "airbnbHero", title: "Airbnb page — top photo", group: "pages", type: "sitePhoto" }),
    defineField({ name: "airbnbSecond", title: "Airbnb page — second photo", group: "pages", type: "sitePhoto" }),

    // Towns
    defineField({
      name: "townPhotos",
      title: "Town page photos",
      group: "towns",
      type: "array",
      description:
        "Optional. Pick a town and give its page a photo from a listing in that area. Towns without one use the home page slideshow photos.",
      of: [
        defineArrayMember({
          type: "object",
          name: "townPhoto",
          fields: [
            defineField({
              name: "town",
              title: "Town",
              type: "string",
              options: { list: SERVICE_AREAS.map((a) => ({ title: `${a.city}, ${a.state}`, value: a.slug })) },
              validation: (r) => r.required(),
            }),
            defineField({ name: "photo", title: "Photo", type: "sitePhoto", validation: (r) => r.required() }),
          ],
          preview: {
            select: { media: "photo.image", town: "town" },
            prepare: ({ media, town }) => {
              const a = SERVICE_AREAS.find((x) => x.slug === town)
              return { media, title: a ? `${a.city}, ${a.state}` : "Pick a town" }
            },
          },
        }),
      ],
      validation: (r) =>
        r.custom((items?: { town?: string }[]) => {
          const towns = (items || []).map((i) => i.town).filter(Boolean)
          return new Set(towns).size === towns.length ? true : "Each town can only have one photo."
        }),
    }),
  ],
  preview: { prepare: () => ({ title: "Site Photos" }) },
});
