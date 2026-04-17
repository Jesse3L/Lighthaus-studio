import { defineField, defineType } from "sanity";

export const propertyFactsType = defineType({
  name: "propertyFacts",
  title: "Property Facts",
  type: "object",
  fields: [
    defineField({ name: "bedrooms", type: "number" }),
    defineField({ name: "bathrooms", type: "number" }),
    defineField({ name: "squareFeet", type: "number" }),
    defineField({ name: "lotSize", type: "string" }),
    defineField({ name: "yearBuilt", type: "number" }),
  ],
});
