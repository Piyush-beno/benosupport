export type WhyInvestCard = {
  title: string
  description: string
}

export type FinTechUseCase = {
  title: string
  subtitle?: string
  description: string
  benefitsTitle?: string
  benefits: string[]
}

export const USE_CASES_HERO = {
  tag: "Use Case",
  title:
    "How Agentic AI Is Transforming FinTech: Real-World Use Cases Every CTO Should See",
  subtitle:
    "Explore real-world Agentic AI use cases across banking, lending, insurance, payments, fraud detection, compliance, and financial operations.",
  image: "/assets/use_cases/use_case_hero.png",
} as const

export const WHY_INVEST_CARDS: WhyInvestCard[] = [
  {
    title: "Operational Complexity",
    description:
      "Financial institutions process millions of transactions, customer interactions, compliance checks, and operational workflows every day. While traditional automation handles repetitive tasks, many financial decisions still require intelligence, context, and adaptability.",
  },
  {
    title: "Intelligent Automation",
    description:
      "Agentic AI enables financial organizations to move beyond rule-based automation by creating intelligent systems that can analyze information, make decisions, collaborate across workflows, and continuously improve with human oversight.",
  },
  {
    title: "Business Impact",
    description:
      "Whether you're a digital bank, fintech startup, insurance provider, lending platform, or payment company, AI can help reduce manual effort while improving speed, accuracy, and customer satisfaction.",
  },
]

export const FINTECH_USE_CASES: FinTechUseCase[] = [
  {
    title: "AI-Powered Fraud Detection & Prevention",
    description:
      "Detect suspicious transactions before they become financial losses. Traditional fraud detection systems rely on predefined rules that often generate false positives or miss evolving fraud patterns. AI-powered fraud detection continuously analyzes transaction behavior, customer activity, and risk indicators in real time to identify anomalies more accurately.",
    benefits: [
      "Reduce fraud losses",
      "Detect suspicious behavior instantly",
      "Lower false positives",
      "Improve customer trust",
    ],
  },
  {
    title: "Automated Loan Origination & Approval Workflows",
    description:
      "Accelerate lending decisions while improving underwriting accuracy. AI streamlines the lending lifecycle by collecting applicant data, validating documents, assessing eligibility, calculating risk scores, and routing applications for approval.",
    benefits: [
      "Faster approvals",
      "Reduced manual underwriting",
      "Improved customer experience",
      "Lower operational costs",
    ],
  },
  {
    title: "Regulatory Compliance & KYC Automation",
    description:
      "Stay compliant without increasing operational overhead. Financial organizations spend significant resources on Know Your Customer (KYC), AML screening, identity verification, and regulatory reporting. AI automates document verification, extracts customer information, identifies compliance risks, and supports audit-ready reporting.",
    benefits: [
      "Faster onboarding",
      "Improved compliance",
      "Reduced manual reviews",
      "Better audit readiness",
    ],
  },
  {
    title: "Intelligent Claims Processing",
    description:
      "Process insurance claims faster with AI-assisted document understanding and workflow automation. AI can extract data from claim forms, supporting documents, medical records, and invoices while routing cases for automated validation or human review based on predefined confidence thresholds.",
    benefits: [
      "Faster claim settlements",
      "Lower processing costs",
      "Improved customer satisfaction",
      "Reduced fraud risk",
    ],
  },
  {
    title: "Real-Time Risk Monitoring & Predictive Analytics",
    description:
      "Make proactive decisions with AI-driven financial intelligence. AI continuously monitors financial activity, customer behavior, market signals, and operational data to identify emerging risks and provide actionable insights before issues escalate.",
    benefits: [
      "Better risk visibility",
      "Earlier issue detection",
      "Smarter decision-making",
      "Improved forecasting",
    ],
  },
  {
    title: "AI-Powered Customer Support Agents",
    description:
      "Deliver 24/7 customer support with intelligent AI assistants. AI agents can answer account-related questions, guide users through banking services, assist with loan applications, resolve common support requests, and seamlessly transfer complex cases to human teams when necessary.",
    benefits: [
      "Faster response times",
      "Improved customer satisfaction",
      "Reduced support costs",
      "Higher service availability",
    ],
  },
  {
    title: "Digital Banking & Mobile Wallet Platforms",
    subtitle: "Build secure and scalable digital financial experiences.",
    description:
      "Beno Support designs and develops modern banking platforms, mobile applications, payment solutions, and digital customer experiences that integrate seamlessly with existing financial systems.",
    benefitsTitle: "Capabilities",
    benefits: [
      "Mobile Banking Apps",
      "Digital Wallets",
      "Payment Gateways",
      "Customer Portals",
      "API Integrations",
      "Cloud Infrastructure",
    ],
  },
  {
    title: "Financial Document Processing & OCR",
    subtitle: "Transform unstructured financial documents into actionable data.",
    description:
      "AI-powered document intelligence extracts information from invoices, loan applications, bank statements, contracts, and compliance documents, reducing manual data entry and improving operational accuracy.",
    benefits: [
      "Faster document processing",
      "Improved data accuracy",
      "Reduced manual work",
      "Better compliance",
    ],
  },
]

export const USE_CASES_FAQS = [
  {
    q: "What is Agentic AI in FinTech?",
    a: "Agentic AI refers to intelligent systems that can reason over context, take multi-step actions, and collaborate across financial workflows — from fraud checks and KYC to lending and customer support — with human oversight where it matters most.",
  },
  {
    q: "Is AI secure for financial institutions?",
    a: "Yes. We design AI solutions with enterprise security controls, data governance, audit trails, and compliance frameworks so sensitive financial data stays protected while teams gain automation and decision support.",
  },
  {
    q: "Can AI integrate with existing banking systems?",
    a: "Absolutely. Our solutions connect with core banking platforms, CRMs, payment rails, document systems, and cloud infrastructure through secure APIs and staged integration roadmaps that minimize disruption.",
  },
  {
    q: "Do you provide cloud modernization services?",
    a: "Yes. Alongside Agentic AI use cases, we help FinTech teams modernize legacy stacks, migrate to AWS/Azure/GCP, and build scalable cloud platforms that support intelligent automation.",
  },
]

export const USE_CASES_CTA = {
  title: "Ready to Modernize Your Financial Operations with AI?",
  description:
    "Whether you're exploring intelligent automation, modernizing legacy financial systems, or deploying AI-powered customer experiences, our team can help you identify the right use cases and build a roadmap tailored to your business.",
  buttonLabel: "Talk to Our Experts",
} as const

export const USE_CASES_INITIAL_VISIBLE = 3
