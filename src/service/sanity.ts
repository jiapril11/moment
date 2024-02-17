import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: false,
  apiVersion: "2024-02-17",
  token: process.env.SANITY_SECRET_TOKEN,
});
