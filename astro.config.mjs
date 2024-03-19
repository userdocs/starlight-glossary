import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://userdocs.github.io",
  base: "/starlight-glossary",
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "test",
          autogenerate: { directory: "test" },
        },
        {
          label: "Glossary",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Glossary page", link: "/glossary" },
          ],
        },
      ],
    }),
  ],
});
