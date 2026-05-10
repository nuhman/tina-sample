import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // ── Home Page ──────────────────────────────────────────────────────────
      {
        name: "homePage",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        match: { include: "home" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields: [
          {
            type: "string",
            name: "seoTitle",
            label: "SEO Page Title",
            isTitle: true,
            required: true,
          },
          // Hero
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Badge Text" },
              { type: "string", name: "title", label: "Title Line 1" },
              {
                type: "string",
                name: "titleHighlight",
                label: "Title Highlighted Line",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "primaryButtonText",
                label: "Primary Button Text",
              },
              {
                type: "string",
                name: "secondaryButtonText",
                label: "Secondary Button Text",
              },
              {
                type: "string",
                name: "socialProofCount",
                label: "Social Proof Count (e.g. 50,000+)",
              },
              {
                type: "string",
                name: "socialProofSuffix",
                label: "Social Proof Suffix (e.g. teams around the world)",
              },
            ],
          },
          // Stats
          {
            type: "object",
            name: "stats",
            label: "Stats Bar",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label ?? "Stat" }),
            },
            fields: [
              { type: "string", name: "value", label: "Value (e.g. 50K+)" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          // Features
          {
            type: "object",
            name: "features",
            label: "Features Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Feature Cards",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title ?? "Feature" }),
                },
                fields: [
                  { type: "string", name: "icon", label: "Icon (emoji)" },
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
          // How It Works
          {
            type: "object",
            name: "howItWorks",
            label: "How It Works Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.title
                      ? `${item.number} — ${item.title}`
                      : "Step",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Step Number (e.g. 01)",
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
          // Testimonials
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Testimonials",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.name ?? "Testimonial",
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    ui: { component: "textarea" },
                  },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role / Company" },
                  {
                    type: "string",
                    name: "avatar",
                    label: "Avatar Initials (e.g. SC)",
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Avatar Background Color (hex)",
                  },
                ],
              },
            ],
          },
          // CTA
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "primaryButtonText",
                label: "Primary Button Text",
              },
              {
                type: "string",
                name: "secondaryButtonText",
                label: "Secondary Button Text",
              },
            ],
          },
        ],
      },

      // ── About Page ─────────────────────────────────────────────────────────
      {
        name: "aboutPage",
        label: "About Page",
        path: "content/pages",
        format: "json",
        match: { include: "about" },
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/aboutus",
        },
        fields: [
          {
            type: "string",
            name: "seoTitle",
            label: "SEO Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "seoDescription",
            label: "SEO Meta Description",
            ui: { component: "textarea" },
          },
          // Hero
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Title Line 1" },
              {
                type: "string",
                name: "titleHighlight",
                label: "Title Highlighted Line",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
            ],
          },
          // Story
          {
            type: "object",
            name: "story",
            label: "Story Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "body1",
                label: "Body Paragraph 1",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "body2",
                label: "Body Paragraph 2",
                ui: { component: "textarea" },
              },
              { type: "string", name: "buttonText", label: "Button Text" },
              {
                type: "object",
                name: "cards",
                label: "Stat Cards",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.text ?? "Card" }),
                },
                fields: [
                  { type: "string", name: "icon", label: "Icon (emoji)" },
                  { type: "string", name: "text", label: "Card Text" },
                  { type: "string", name: "year", label: "Year / Label" },
                ],
              },
            ],
          },
          // Values
          {
            type: "object",
            name: "values",
            label: "Values Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "items",
                label: "Values",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title ?? "Value" }),
                },
                fields: [
                  { type: "string", name: "icon", label: "Icon (emoji)" },
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
          // Timeline
          {
            type: "object",
            name: "timeline",
            label: "Timeline Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "milestones",
                label: "Milestones",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: item?.year
                      ? `${item.year} — ${item.event}`
                      : "Milestone",
                  }),
                },
                fields: [
                  { type: "string", name: "year", label: "Year" },
                  { type: "string", name: "event", label: "Event Title" },
                  {
                    type: "string",
                    name: "detail",
                    label: "Detail",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          // Team
          {
            type: "object",
            name: "team",
            label: "Team Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "members",
                label: "Team Members",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name ?? "Member" }),
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  {
                    type: "string",
                    name: "bio",
                    label: "Bio",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "initials",
                    label: "Avatar Initials (e.g. EV)",
                  },
                  {
                    type: "string",
                    name: "color",
                    label: "Avatar Color (hex)",
                  },
                ],
              },
            ],
          },
          // Join / Hiring CTA
          {
            type: "object",
            name: "join",
            label: "Hiring CTA Section",
            fields: [
              { type: "string", name: "sectionLabel", label: "Section Label" },
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "primaryButtonText",
                label: "Primary Button Text",
              },
              {
                type: "string",
                name: "secondaryButtonText",
                label: "Secondary Button Text",
              },
              {
                type: "object",
                name: "perks",
                label: "Perks List",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.perk ?? "Perk" }),
                },
                fields: [
                  { type: "string", name: "icon", label: "Icon (emoji)" },
                  { type: "string", name: "perk", label: "Perk Description" },
                ],
              },
            ],
          },
        ],
      },

      // ── Blog Posts ─────────────────────────────────────────────────────────
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
