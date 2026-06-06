import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Lighthaus Studio")
          .items([
            // Singleton — Homepage Settings (one document, not a list)
            S.listItem()
              .title("Homepage Settings")
              .id("homepageSettings")
              .icon(() => "🏠")
              .child(
                S.document()
                  .schemaType("homepageSettings")
                  .documentId("homepageSettings")
              ),
            S.divider(),
            // Standard document lists
            S.documentTypeListItem("property").title("Properties"),
            S.documentTypeListItem("agent").title("Agents"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
