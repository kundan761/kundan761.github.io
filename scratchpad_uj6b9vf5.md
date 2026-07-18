# Exploration Plan

1. Open `https://tara122333.vercel.app/` in a new page/tab or replace the current one.
2. Maximize the window.
3. Take a screenshot of the landing screen (Navbar & Hero).
4. Identify and scroll to each section (About, Open Source, Experience, Skills, Achievements, Contact).
5. For each section:
   - Capture a screenshot (saved as an artifact).
   - Analyze fonts, color codes, layouts, hover effects, and animations.
6. Note down overall design tokens: background colors, text colors, gradients, card designs, resume button style.

## Section Analysis

### 1. Navbar & Layout
- **Logo / Brand ID**: An avatar/icon followed by two lines of text: "Tara Kumawat" and "Sr. Engineer".
- **Navigation Links**: Home, About, Open Source, Experience, Skills, Achievements, Contact.
  - Interactive: Hover effect switches color from semi-transparent `text-fg/60` to full `hover:text-fg`.
- **Controls**:
  - Theme toggle button (light/dark mode switch).
  - "Resume" Button: Small, pill-shaped, colored with primary color (`bg-primary`), with shadow effect (`shadow-glow`).
- **Layout**: Fixed or sticky navbar at the top, rounded/floating menu styling or simple bar.

### 2. Hero / Landing Section
- **Content Details**:
  - Code snippet design element: React/JS style object displaying profile variables.
  - Headings: "Hi 👋, I'm Tara." and "Senior Software Engineer..."
  - Primary CTA: "Hire Me" (primary filled button) and "Resume" (bordered primary button).
  - Social Links: Pill badges for GitHub, LinkedIn, Email, and Book a meeting (Cal.com style badge with distinct glow/primary highlight).
  - Key Metrics: "10+ Products built", "$300K ARR shipped in first year", "4+ Years of experience".
  - Status Indicator: "Currently Founding Engineer · WelcomeScreen" (with a green dot/available style).
- **Animations / Transitions**:
  - Scale effects on buttons (e.g., `active:scale-[0.98]`).
  - Smooth hover color/glow transitions.

### 3. About Section
- **Heading**: "About me" (small badge/text) with subheading "Engineering products that compound revenue."
- **Intro text**: "I've spent the last few years as a founding engineer turning blank repos into revenue..."
- **Layout**: A 3x3 grid of cards (on desktop) detailing highlights:
  1. `01` / `$300K+` / ARR Growth Contribution
  2. `02` / `4+` / Years Of Experience
  3. `03` / `100%` / Secured Systems
  4. `04` / `100%` / AI-powered SaaS Systems
  5. `05` / `24/7` / Real-time Applications
  6. `06` / `12+` / Third-party Integrations
  7. `07` / `95%` / AI Auto-Replies
  8. `08` / `10+` / Products Built
  9. `09` / `15+` / PMS Integrations
- **Card Design**: Very clean, subtle border (`border-divider/10`), rounded corners, dark background (`bg-surface/[0.04]`), and a neon indicator/accent color on hover/highlight. Top left corner shows card number (`01`, `02`, etc.) in small font. Big value/stat (like `$300K+`, `4+`) uses primary colors or bright text.

### 4. Open Source Section
- **Heading**: "Open Source" with subheading "Stopping fake signups — as an npm package."
- **Intro text**: "A lightweight Node.js utility I built and ship on npm — drop it into any signup flow to reject disposable / temporary email addresses."
- **Layout**: Two columns:
  - Left column: Package info card (`block-temp-mail`), showing features like "Blocks disposable inboxes", "Works anywhere Node runs", "Zero dependencies", plus npm install command copy block and action buttons ("Source code", "View on npm").
  - Right column: Code block mimicking a code editor window with filename tab (`signup.ts`) and version badge (`block-temp-mail · v1.0.0`), displaying code syntax.

### 5. Experience Section
- **Heading**: "Experience" with subheading "A timeline of shipping in production."
- **Layout**: Chronological vertical timeline list.
- **Timeline Items**:
  1. **WelcomeScreen** (San Francisco, USA · Remote) — 2 positions:
     - *Senior Software Engineer · Founding Engineer* (Mar 2025 — Present)
     - *Software Engineer* (Sept 2023 — Mar 2025)
     - Details: owning architecture, leading teams, RAG/ChatGPT bots, Stripe integration, migration to microservices, performance optimizations.
     - Tech badges: React, TypeScript, Node.js, PostgreSQL, AWS, Stripe, Microservices, WebSockets, Redux, OAuth, OpenAI, RAG.
  2. **AICAN** (Mumbai, India):
     - *Software Engineer* (Jul 2023 — Sept 2023)
     - Details: Admin Panel UI/APIs, Access Management, IoT devices tracking flow, customizable dashboard widgets.
     - Tech badges: MongoDB, Express.js, React, Node.js, TailwindCSS.
  3. **Pawpi** (Jaipur, India):
     - *Software Development Engineer* (Jan 2023 — Jul 2023)
     - Details: Full-stack pet e-commerce marketplace (pawpi.co), UI, payment/shipping integration, CI/CD, AWS.
     - Tech badges: MongoDB, Express.js, React, Node.js, JavaScript, Redux, TailwindCSS, HeadlessUI, AWS, CI/CD, GitHub Actions, Postman.
  4. **SaaSKart** (BTH, Jaipur, India):
     - *Software Developer Intern* (Jun 2022 — Dec 2022)
     - Details: Frontend/backend React/Node/Express/MongoDB, authentication (OTP/Magic Link), RESTful APIs.
- **Item Style**: Grouped by company. Right side contains details, left side contains company name, locations, and time ranges. Tech stack badges at the bottom of each item.

### 6. Skills Section (Toolbox)
- **Heading**: "Toolbox" with subheading "Skills, tools, and the stack I trust."
- **Layout**: A grid of categories with horizontal bars/percentage ratings.
- **Visible Categories**:
  - Languages/Tools: C / C++, SQL, BrightScript, Redux, TailwindCSS, HTML/CSS, Framer Motion, Webpack, REST/gRPC/WebSockets, API Gateway, RabbitMQ, Microservices, Testing (Mocha, Chai), Postman.
  - Database: PostgreSQL, MongoDB, MySQL, Redis, Vector Database, Database Design.
  - Cloud & DevOps: AWS (S3, EC2), Docker, Kubernetes, Terraform, GitHub Actions, CI/CD.
  - AI & GenAI: RAG & Vector Search, LLM API, Context Management & Prompting, Claude Code, ChatGPT, Gemini.
- **Skill Bar Style**: Title of tech on the left, percentage value on the right, and a progress bar showing the level of expertise.

### 7. Achievements Section
- **Heading**: "Achievements" with subheading "A few highlights from competitive programming and hackathon stages."
- **Layout**: Grid of cards displaying accolades:
  1. `1st` / Global rank / #1 Rank · CodeChef Starters 41 / Topped the global leaderboard in C/C++ and won a 6-month LinkedIn Premium subscription.
  2. `1st` / Gold rank / Gold Medal · HackerRank / #1 rank with gold medals in C and C++ programming.
  3. `3⭐` / Star rating / 3-Star · LeetCode / 6 badges (5 monthly challenges and 100 Days of Coding 2022).
  4. `36h` / Hours non-stop / Smart India Hackathon · Participant / Flagship national hackathon selection.
  5. Startup ecosystem / Invest Rajasthan · Startup Meet / Pitching & networking at BTH Jaipur.

### 8. Services Section
- **Heading**: "Services" with subheading "How I can help your team."
- **Intro text**: "Plug me in as an extension of your engineering team — from greenfield builds to scale-out work."
- **Layout**: Grid of 9 capability cards:
  1. **Full-Stack Engineering**: React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis.
  2. **SaaS Platform Engineering**: Multi-tenant architecture, RBAC, Stripe billing, customer dashboards.
  3. **AI-Powered Applications**: LLMs (Claude, GPT, Gemini), RAG pipelines, chatbots, real-time messaging.
  4. **Microservices & System Design**: Service decomposition, event-driven (RabbitMQ, MQTT), gRPC, REST APIs.
  5. **Real-Time Systems**: WebSockets, dashboards, webhook fan-out/retries.
  6. **Subscription & Billing**: Stripe subscriptions, metered pricing, custom admin tooling.
  7. **Integration Engineering**: Unified third-party APIs (Stripe, Datadog, PostHog, PMS integrations).
  8. **Cloud & DevOps**: AWS (S3, EC2, Lambda), Docker, Kubernetes, Terraform, CI/CD.
  9. **Performance Engineering**: Caching, lazy loading, Webpack tuning, bundle optimization.

### 9. Certificates Section
- **Heading**: "Certificates" with subheading "Credentials & recognitions."
- **Details**: "6 certifications earned... click to preview or grab the PDF."
- **Layout**: A grid of 6 certificate tiles:
  1. Jalan Technologies - Software Engineering Internship
  2. AICAN Private Limited - Full Stack Development Internship
  3. SkillVertex × Artifintel - App Development Internship
  4. SaaSDekho - Web Development Internship
  5. SkillVertex - Campus Executive Appreciation
  6. Tata Consultancy Services - TCS iON Career Edge
- **Interaction**: "View" button triggers a modal/preview, "Download" button links to PDF files.

### 10. Contact Section
- **Heading**: "Let's build" with subheading "Have an awesome project idea? Let's discuss it."
- **Form Fields**: Name, Email, Subject, Message (with dark minimalist input styling).
- **CTA**: "Send message" (primary color button with scale and glow transitions).
- **Alternative Contact**: Email text (`tarachand122333@gmail.com`), phone number (`+91 7229804925`), and social icon shortcuts (GitHub, LinkedIn, WhatsApp, Email, Cal.com).
- **Calendar Integration**: "Prefer a quick call? Pick a time." widget details / "Book on Cal.com" button linking to `cal.com/tara122333`.

### 11. Footer
- Logo/Brand details on left.
- Navigation links center/right.
- "Built with React TypeScript TailwindCSS Framer Motion Vite" tag.
- Text: "Designed and engineered from scratch. No templates, No AI, No shortcuts."

## Overall Design System & Tokens
- **Background**: Dark, sleek dark mode theme (likely `#0b0f19` or similar deep indigo/gray dark color, matching tailwind class `bg-app`).
- **Surface**: Translucent dark surfaces (`bg-surface/[0.04]` or `bg-surface/[0.05]`).
- **Primary Color**: High-tech bright blue or violet/indigo color (`bg-primary`, `text-primary`) with subtle neon glow drop-shadow effects (`shadow-glow`, `shadow-glow-lg`).
- **Dividers**: Thin subtle border styling (`border-divider/10`).
- **Typography**: Minimalist sans-serif font (likely Inter or Geist Sans) with precise letter-spacing and custom styling for numeric details (large stats like `$300K+`, `4+` are highly readable).
- **Interactions**: Highly interactive hover states on all icons, navigation links, cards, and buttons, typically fading in primary colors, increasing borders, scale-downs on click, and hover glows.
