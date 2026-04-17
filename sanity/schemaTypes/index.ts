import { type SchemaTypeDefinition } from "sanity";
import { propertyType } from "./property";
import { agentType } from "./agent";
import { propertyImageType } from "./objects/propertyImage";
import { propertyFactsType } from "./objects/propertyFacts";
import { agentSocialLinksType } from "./objects/agentSocialLinks";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    propertyType,
    agentType,
    propertyImageType,
    propertyFactsType,
    agentSocialLinksType,
  ],
};
