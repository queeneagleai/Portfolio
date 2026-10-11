import type { Skill, Service, Project, ProcessStep } from "../types";

// WhatsApp number in international format (+234), so prospects outside Nigeria can reach you.
// wa.me links must omit "+" and leading zeros: 0908... -> 234908...
export const WHATSAPP_NUMBER = "2349080242840";
export const WHATSAPP_DISPLAY = "+234 908 024 2840";
export const WHATSAPP_MESSAGE =
  "Hi, I came across QueenEagleAI and I'm interested in using AI to improve my business operations. Can we talk?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const PHONE_TEL = "+2349080242840";
export const LINKEDIN_URL = "https://www.linkedin.com/in/queen-ikwuji-8b925524a";
export const EMAIL = "queenikwuji@gmail.com";
export const CALENDLY_URL = "https://calendly.com/queenikwuji/ai-workflow-discovery-call";
export const GITHUB_URL = "https://github.com/queeneagleai";

// n8n webhook that powers the contact form
export const CONTACT_WEBHOOK_URL =
  "https://queen.steprotech.com/webhook/portfolio-lead-capture";

// Actual working stack: AI models/APIs + automation infrastructure
export const TOOL_STACK: string[] = [
  "n8n",
  "Claude",
  "Gemini",
  "Groq",
  "OpenRouter",
  "Apify",
  "Airtable",
  "Google Sheets",
  "Supabase",
  "Telegram",
  "Gmail",
];

export const SKILLS: Skill[] = [
  { icon: "⚡", title: "n8n Workflow Design", description: "Multi-step orchestration & error handling" },
  { icon: "🤖", title: "AI Agents & RAG", description: "GPT-powered assistants with custom knowledge" },
  { icon: "🔗", title: "API Integrations", description: "REST, GraphQL & webhook architectures" },
  { icon: "📇", title: "CRM Automation", description: "HubSpot, Salesforce, Airtable sync" },
  { icon: "✨", title: "Prompt Engineering", description: "Structured outputs & function calling" },
  { icon: "{ }", title: "JavaScript & Regex", description: "Custom logic & data transformation" },
  { icon: "🎨", title: "Vibe Coding", description: "Rapid prototyping with React & Tailwind" },
  { icon: "💫", title: "Lovable & Cursor", description: "AI-assisted full-stack builds" },
  { icon: "🗄️", title: "Supabase & Databases", description: "Schema design, RLS & edge functions" },
];

export const SERVICES: Service[] = [
  { icon: "⚡", title: "n8n Workflows", description: "End-to-end automation orchestration" },
  { icon: "🤖", title: "AI Agents", description: "Custom GPT-powered assistants" },
  { icon: "🔗", title: "API & CRM", description: "HubSpot, Salesforce, Stripe & more" },
  { icon: "{ }", title: "JavaScript", description: "Custom logic & data transformation" },
  { icon: "/^.*/", title: "Advanced Regex", description: "Precision text parsing & validation" },
  { icon: "✦", title: "Process AI", description: "Intelligent business optimization" },
];

// ⚠️ PLACEHOLDER DESCRIPTION — "AI Customer Complaint Prioritizer" description below
// is drafted from the title only. Replace with the real summary before going live.
export const PROJECTS: Project[] = [
  {
    category: "Operations",
    title: "AI Waste Collection Operations Automation",
    description:
      "AI extracts job details from customer requests, matches an available driver by service area, and auto-sends Telegram and email confirmations — zero manual dispatching.",
    githubUrl: "https://github.com/queeneagleai/AI-Waste-Collection-Operations-Automation",
  },
  {
    category: "Marketing",
    title: "LinkedIn Auto-Poster",
    description:
      "Telegram input → AI agent (with dual-model fallback via OpenRouter and Gemini) → human approval step → auto-publish to LinkedIn. Built to survive OAuth quirks and real-world failure points, not just demo conditions.",
    githubUrl: "https://github.com/queeneagleai/Linkedin-Auto-Poster",
  },
  {
    category: "Sales Ops",
    title: "LinkedIn Comment Intelligence",
    description:
      "Scrapes engagement on target posts, classifies commenters by intent and priority using AI, and pushes high-value leads straight to Telegram. So outreach happens while the conversation is still hot.",
    githubUrl:
      "https://github.com/queeneagleai/AI-Powered-LinkedIn-Comment-Intelligence-Version-1-",
  },
  {
    category: "Reputation / Support",
    title: "AI Google Review Watchdog",
    description:
      "Monitors incoming reviews, runs sentiment analysis, fires an instant Telegram alert on anything negative, and logs everything to Airtable. So a bad review gets a response in minutes, not days.",
    githubUrl: "https://github.com/queeneagleai/AI-Google-Review-Watchdog",
  },
  {
    category: "Customer Service",
    title: "AI Customer Complaint Prioritizer",
    // PLACEHOLDER — replace with your real project description.
    description:
      "AI reads incoming customer complaints, scores urgency and sentiment, and routes the most critical issues to the right team first — so nothing serious sits in a queue.",
    githubUrl: "https://github.com/queeneagleai/AI-Customer-Complaint-Prioritizer",
  },
  {
    category: "Lead Gen / Customer Service",
    title: "World Cup Booking & Session Chatbot",
    description:
      "End-to-end booking and session management system built for a live sports bar client. Handles inbound requests and manages the full customer session lifecycle automatically.",
    githubUrl: "https://github.com/queeneagleai/World-Cup-Booking-System",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: "01", title: "Discovery Call", description: "We map your current workflows, bottlenecks, and the manual tasks silently draining your team's time." },
  { number: "02", title: "Process Audit", description: "I analyze your tools, data flows, and integrations to design the cleanest path from chaos to automation." },
  { number: "03", title: "Blueprint Design", description: "You receive a clear architecture: triggers, AI agents, API connections, and success metrics — all approved before a single node is built." },
  { number: "04", title: "Build & Integrate", description: "I engineer the system in n8n with custom AI agents, JavaScript logic, and deep CRM/API integrations." },
  { number: "05", title: "Test & Refine", description: "Every workflow is stress-tested with real data, edge cases, and failure scenarios — then refined to perform flawlessly." },
  { number: "06", title: "Launch & Optimize", description: "We deploy, monitor, and continuously optimize so your automations get smarter and faster over time." },
];

// Featured Resources — no signup/waitlist page yet, so this is an email-capture
// style CTA for now. Swap CTA_HREF for the real page once it exists.
export const FREE_ACADEMY_URL = ""; // TODO: add link once your FreeAcademy article is published
export const COHORT_MONTH = "September";
