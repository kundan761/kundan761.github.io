import { Rocket, Gauge, Network, BrainCircuit, Layers, CloudCog, CreditCard, Plug, Radio } from 'lucide-react';

export const servicesData = [
  {
    title: "Full-Stack Engineering",
    icon: Layers,
    description: "Production-grade product engineering end-to-end — from data model to UI motion, built for real users from day one.",
    features: ["React · Next.js · TypeScript", "Node.js · Express APIs", "PostgreSQL · MongoDB · Redis"]
  },
  {
    title: "SaaS Platform Engineering",
    icon: Rocket,
    description: "Multi-tenant SaaS platforms with RBAC, integrations, and real-time UX — architected to scale from first customer to six figures in ARR.",
    features: ["Multi-tenant architecture", "RBAC + OAuth (Google · Facebook)", "Admin & customer dashboards"]
  },
  {
    title: "AI-Powered Applications",
    icon: BrainCircuit,
    description: "LLM features that ship in production — agents, conversational support, and prompt-engineered workflows built for reliability, not demos.",
    features: ["Claude · GPT · Gemini · Codex", "Real-time chat with auto-replies", "Personalized itinerary generation"]
  },
  {
    title: "Microservices & System Design",
    icon: Network,
    description: "Re-architecting monoliths into distributed, fault-tolerant microservices — cleaner boundaries, faster ship cycles.",
    features: ["Service decomposition", "Event-driven (RabbitMQ · MQTT)", "API contracts (REST)"]
  },
  {
    title: "Real-Time Systems",
    icon: Radio,
    description: "Live UX backed by event streams — instant updates and bi-directional communication, without the usual rough edges.",
    features: ["WebSockets", "Live notifications & dashboards", "Webhook fan-out & retries"]
  },
  {
    title: "Subscription & Billing",
    icon: CreditCard,
    description: "Stripe-backed subscription systems with admin tooling — free trials, metered pricing, and clean billing lifecycles.",
    features: ["Stripe billing & webhooks", "Free trials · upgrades · prorations", "Admin customization panel"]
  },
  {
    title: "Integration Engineering",
    icon: Plug,
    description: "Unifying messy third-party APIs into one clean abstraction — calendars, payments, analytics, and property systems.",
    features: ["5+ PMS integrations", "Stripe · Google Maps · Datadog", "Webhook normalization & sync"]
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    description: "AWS-native deployments with CI/CD and observability built in — production that runs without drama.",
    features: ["AWS S3 · EC2 · Lambda", "Docker · Kubernetes", "GitHub Actions CI/CD", "Datadog monitoring & alerting"]
  },
  {
    title: "Performance Engineering",
    icon: Gauge,
    description: "Compounding performance wins — caching, query tuning, and bundle optimization that lift revenue and reduce churn.",
    features: ["Caching · lazy loading · code splitting", "Webpack tree shaking & tuning", "40–50% latency reduction"]
  }
];