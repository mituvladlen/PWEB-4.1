// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: "PWEB-4.1"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content",
        match: { include: "home" },
        format: "md",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          // SEO
          { type: "string", name: "siteTitle", label: "Site Title" },
          { type: "string", name: "siteDescription", label: "Site Description", ui: { component: "textarea" } },
          // Hero
          { type: "string", name: "heroTitle", label: "Hero Title" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          { type: "string", name: "heroDescription", label: "Hero Description", ui: { component: "textarea" } },
          { type: "string", name: "heroCtaText", label: "Hero Button Text" },
          // Mobile Banner
          { type: "string", name: "mobileBannerTitle", label: "Mobile Banner Title" },
          { type: "string", name: "mobileBannerText", label: "Mobile Banner Text" },
          // How It Works
          { type: "string", name: "howItWorksTitle", label: "How It Works Section Title" },
          {
            type: "object",
            name: "steps",
            label: "Steps",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "number", label: "Step Number" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          // Benefits
          { type: "string", name: "benefitsTitle", label: "Benefits Section Title" },
          {
            type: "object",
            name: "benefits",
            label: "Benefits",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "icon", label: "Icon (emoji)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          // Stats
          { type: "string", name: "statsTitle", label: "Stats Section Title" },
          { type: "string", name: "statsSubtitle", label: "Stats Subtitle" },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "label", label: "Label" }
            ]
          },
          // Contact
          { type: "string", name: "contactTitle", label: "Contact Section Title" },
          { type: "string", name: "contactText", label: "Contact Text" },
          { type: "string", name: "contactCtaText", label: "Contact Button Text" },
          { type: "string", name: "instagramUrl", label: "Instagram URL" },
          { type: "string", name: "emailAddress", label: "Email Address" },
          // Footer
          { type: "string", name: "footerCopyright", label: "Footer Copyright" },
          { type: "string", name: "footerTagline", label: "Footer Tagline" },
          // Mascot
          { type: "string", name: "mascotBubbleLine1", label: "Mascot Bubble Line 1" },
          { type: "string", name: "mascotBubbleLine2", label: "Mascot Bubble Line 2" },
          { type: "string", name: "mascotCtaText", label: "Mascot CTA Text" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
