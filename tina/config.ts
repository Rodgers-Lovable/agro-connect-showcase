import { defineConfig } from "tinacms";

// Vercel exposes the deployed branch; fall back to local/main otherwise.
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

// All site content lives as JSON files in src/data. Each file is a single
// document, so every collection points at the src/data folder and is scoped to
// exactly one file via `match.include`, with create/delete disabled in the UI.
//
// IMPORTANT: Tina rewrites a file from its schema on save, so every field that
// exists in the JSON is declared here — omitting one would strip it on save.
const DATA_PATH = "src/data";

const singleton = (include: string) => ({
  path: DATA_PATH,
  format: "json" as const,
  match: { include },
  ui: {
    allowedActions: { create: false, delete: false },
  },
});

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // from app.tina.io
  token: process.env.TINA_TOKEN, // from app.tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ---- Company (global details) ----
      {
        name: "company",
        label: "Company Details",
        ...singleton("company"),
        fields: [
          {
            type: "object",
            name: "company",
            label: "Company",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "abn", label: "ABN" },
              { type: "string", name: "ceo", label: "CEO" },
              {
                type: "object",
                name: "address",
                label: "Address",
                fields: [
                  { type: "string", name: "street", label: "Street" },
                  { type: "string", name: "city", label: "City" },
                  { type: "string", name: "state", label: "State" },
                  { type: "string", name: "postcode", label: "Postcode" },
                  { type: "string", name: "country", label: "Country" },
                  { type: "string", name: "full", label: "Full address" },
                ],
              },
              {
                type: "object",
                name: "contact",
                label: "Contact",
                fields: [
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "website", label: "Website" },
                ],
              },
              {
                type: "object",
                name: "dev",
                label: "Developer",
                fields: [
                  { type: "string", name: "fname", label: "First name" },
                  { type: "string", name: "lname", label: "Last name" },
                  { type: "string", name: "website", label: "Website" },
                  { type: "string", name: "phone", label: "Phone" },
                ],
              },
              {
                type: "string",
                name: "mission",
                label: "Mission",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "vision",
                label: "Vision",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "values",
                label: "Core values",
                list: true,
                ui: { itemProps: (i: any) => ({ label: i?.title }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "string",
                name: "history",
                label: "History",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ---- Product categories ----
      {
        name: "categories",
        label: "Product Categories",
        ...singleton("categories"),
        fields: [
          {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.name }) },
            fields: [
              { type: "string", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "description", label: "Description" },
              {
                type: "string",
                name: "icon",
                label: "Icon (Lucide name: Coffee, Wheat, Flame)",
              },
            ],
          },
        ],
      },

      // ---- Products ----
      {
        name: "products",
        label: "Products",
        ...singleton("products"),
        fields: [
          {
            type: "object",
            name: "products",
            label: "Products",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.name }) },
            fields: [
              { type: "string", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              {
                type: "string",
                name: "category",
                label: "Category ID (must match a category)",
              },
              {
                type: "string",
                name: "image",
                label: "Image filename (in public/assets/products)",
              },
              {
                type: "string",
                name: "shortDescription",
                label: "Short description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "fullDescription",
                label: "Full description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "origin", label: "Origin" },
              { type: "string", name: "packaging", label: "Packaging" },
              {
                type: "string",
                name: "certifications",
                label: "Certifications",
                list: true,
              },
            ],
          },
        ],
      },

      // ---- Certifications + Quality process ----
      {
        name: "certifications",
        label: "Certifications & Quality Process",
        ...singleton("certifications"),
        fields: [
          {
            type: "object",
            name: "certifications",
            label: "Certifications",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.name }) },
            fields: [
              { type: "string", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "icon", label: "Icon (Lucide name)" },
            ],
          },
          {
            type: "object",
            name: "qualityProcess",
            label: "Quality process steps",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "string", name: "step", label: "Step number" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ---- Home features ----
      {
        name: "features",
        label: "Home: Why Choose Us",
        ...singleton("features"),
        fields: [
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              {
                type: "string",
                name: "icon",
                label: "Icon (Lucide name: Globe, Leaf, Shield, Truck)",
              },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ---- FAQ ----
      {
        name: "faq",
        label: "FAQ",
        ...singleton("faq"),
        fields: [
          {
            type: "object",
            name: "faq",
            label: "Questions",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.question }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "question", label: "Question" },
              {
                type: "string",
                name: "answer",
                label: "Answer",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ---- Testimonials ----
      {
        name: "testimonials",
        label: "Testimonials",
        ...singleton("testimonials"),
        fields: [
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.author }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              {
                type: "string",
                name: "quote",
                label: "Quote",
                ui: { component: "textarea" },
              },
              { type: "string", name: "author", label: "Author" },
              { type: "string", name: "role", label: "Role" },
              { type: "string", name: "location", label: "Location" },
            ],
          },
        ],
      },

      // ---- Timeline ----
      {
        name: "timeline",
        label: "About: Timeline",
        ...singleton("timeline"),
        fields: [
          {
            type: "object",
            name: "timeline",
            label: "Milestones",
            list: true,
            ui: {
              itemProps: (i: any) => ({
                label: i?.year ? `${i.year} — ${i.title}` : i?.title,
              }),
            },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },

      // ---- Impact stats ----
      {
        name: "impactStats",
        label: "About: Impact Stats",
        ...singleton("impact-stats"),
        fields: [
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.label }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "number", label: "Number (e.g. 100+)" },
              { type: "string", name: "label", label: "Label" },
              {
                type: "string",
                name: "icon",
                label: "Icon (Lucide name: Users, Globe, Package, MapPin)",
              },
            ],
          },
        ],
      },

      // ---- Traceability ----
      {
        name: "traceability",
        label: "Quality: Farm-to-Export Steps",
        ...singleton("traceability"),
        fields: [
          {
            type: "object",
            name: "traceabilitySteps",
            label: "Steps",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "icon", label: "Icon (Lucide name)" },
            ],
          },
        ],
      },

      // ---- Sustainable practices ----
      {
        name: "sustainablePractices",
        label: "Quality: Sustainable Practices",
        ...singleton("sustainable-practices"),
        fields: [
          {
            type: "object",
            name: "sustainablePractices",
            label: "Practices",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.label }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "stat", label: "Stat (e.g. 85%)" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },

      // ---- Quality gallery ----
      {
        name: "qualityGallery",
        label: "Quality: Gallery",
        ...singleton("quality-gallery"),
        fields: [
          {
            type: "object",
            name: "galleryItems",
            label: "Gallery items",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.caption }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              {
                type: "string",
                name: "image",
                label: "Image filename (in public/assets)",
              },
              { type: "string", name: "caption", label: "Caption" },
              { type: "string", name: "alt", label: "Alt text" },
            ],
          },
        ],
      },

      // ---- Partnerships ----
      {
        name: "partnerships",
        label: "Quality: Partnerships",
        ...singleton("partnerships"),
        fields: [
          {
            type: "object",
            name: "partnerships",
            label: "Partnerships",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.name }) },
            fields: [
              { type: "string", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },

      // ---- Export logistics ----
      {
        name: "exportLogistics",
        label: "Quality: Export & Logistics",
        ...singleton("export-logistics"),
        fields: [
          {
            type: "object",
            name: "logisticsSteps",
            label: "Logistics steps",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "icon", label: "Icon (Lucide name)" },
            ],
          },
        ],
      },

      // ---- Compliance docs ----
      {
        name: "complianceDocs",
        label: "Quality: Compliance Documents",
        ...singleton("compliance-docs"),
        fields: [
          {
            type: "object",
            name: "documents",
            label: "Documents",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.title }) },
            fields: [
              { type: "number", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "icon", label: "Icon (Lucide name)" },
            ],
          },
        ],
      },

      // ---- Team ----
      {
        name: "team",
        label: "Team Members",
        ...singleton("team"),
        fields: [
          {
            type: "object",
            name: "team",
            label: "Members",
            list: true,
            ui: { itemProps: (i: any) => ({ label: i?.name }) },
            fields: [
              { type: "string", name: "itemId", nameOverride: "id", label: "ID" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "photo",
                label: "Photo filename (in public/assets/team)",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "responsibilities",
                label: "Responsibilities",
                list: true,
              },
              {
                type: "string",
                name: "expertise",
                label: "Expertise",
                list: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
