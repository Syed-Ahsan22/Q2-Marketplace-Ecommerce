// const sanity = sanityClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   useCdn: true,
// });
// function sanityClient(arg0: { projectId: string | undefined; dataset: string | undefined; apiVersion: string | undefined; useCdn: boolean; }) {
//   throw new Error("Function not implemented.");
// }

import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "yourProjectId",
  dataset: "production",
  apiVersion: "2023-01-01", // Use the current date
  useCdn: true, // `false` if you need live updates
});

export { client };

