import type { IconName } from '../components/Icon';

export interface Service {
  slug: string;
  icon: IconName;
  title: string;
  short: string;
  includes: string[];
  suitableFor: string;
  engagement: string;
}

export const services: Service[] = [
  {
    slug: 'custom-web-applications',
    icon: 'web',
    title: 'Custom Web Applications',
    short:
      'Business portals, dashboards, internal tools, and customer-facing platforms built for your exact workflows.',
    includes: [
      'Requirements analysis and technical specification',
      'UX/UI design and clickable prototypes',
      'Full-stack development of portals, dashboards, admin panels, and internal tools',
      'Testing, deployment, and handover documentation',
    ],
    suitableFor:
      'Organizations whose processes are not covered well by off-the-shelf products, and that need software shaped around how their teams actually work.',
    engagement:
      'After an initial discussion of your requirements, we prepare a written proposal with scope, timeline, and cost. Development then proceeds in agreed milestones with regular progress updates.',
  },
  {
    slug: 'mobile-app-development',
    icon: 'mobile',
    title: 'Mobile App Development',
    short:
      'iOS and Android applications, from customer-facing apps to operational tools for field teams.',
    includes: [
      'Product definition and screen design',
      'Cross-platform or native development, chosen to fit the project',
      'Backend and API integration',
      'Testing on real devices and support with App Store and Google Play release',
    ],
    suitableFor:
      'Businesses that want to offer customers a mobile experience, or give employees reliable tools for work away from a desk.',
    engagement:
      'Engagements are project-based. We scope the app with you, confirm a proposal, and deliver in phases so you can review progress early and often.',
  },
  {
    slug: 'saas-platforms',
    icon: 'saas',
    title: 'SaaS Platforms',
    short:
      'Subscription software products: multi-tenant architecture, billing, admin tooling, and continuous iteration.',
    includes: [
      'Product architecture for multi-tenant, subscription-based software',
      'User accounts, roles, subscription and billing integration',
      'Admin dashboards, reporting, and usage analytics',
      'Cloud deployment, monitoring, and ongoing product iteration',
    ],
    suitableFor:
      'Founders and companies launching a software product of their own, or moving an existing service to a subscription model.',
    engagement:
      'SaaS products are normally built in phases: a focused first version (MVP), followed by planned iterations based on real user feedback. We agree each phase separately.',
  },
  {
    slug: 'ai-powered-solutions',
    icon: 'ai',
    title: 'AI-Powered Solutions',
    short:
      'Practical AI features — document processing, assistants, classification, recommendations — applied to real operations.',
    includes: [
      'Assessment of where AI can realistically help your operations',
      'Document processing, data extraction, and classification',
      'Chat assistants and knowledge-search features for customers or staff',
      'Integration of established AI models and APIs into your existing systems',
    ],
    suitableFor:
      'Organizations that want to apply AI to concrete business problems without building an in-house research team.',
    engagement:
      'We usually start with a small, well-defined pilot to prove value, then extend it into a production system once the results are clear.',
  },
  {
    slug: 'business-process-automation',
    icon: 'automation',
    title: 'Business Process Automation',
    short:
      'Replace repetitive manual work with automated workflows, approvals, notifications, and document generation.',
    includes: [
      'Mapping of current workflows and identification of automation opportunities',
      'Automated approvals, notifications, reminders, and document generation',
      'Connection of the tools you already use into one flow',
      'Measurement of time saved and error reduction',
    ],
    suitableFor:
      'Teams that lose significant time to repetitive manual tasks, copying data between systems, or chasing approvals over email.',
    engagement:
      'We begin with a short process audit, agree a prioritized automation roadmap, and implement it step by step — starting with the changes that pay back fastest.',
  },
  {
    slug: 'cloud-systems-and-integrations',
    icon: 'cloud',
    title: 'Cloud Systems and Integrations',
    short:
      'Cloud architecture, deployment pipelines, and integrations that connect your systems and data.',
    includes: [
      'Cloud architecture, deployment, and environment setup',
      'CI/CD pipelines, monitoring, and backups',
      'API integrations between systems such as ERP, CRM, accounting, and payment providers',
      'Data migration from legacy tools',
    ],
    suitableFor:
      'Companies modernizing their infrastructure, or teams whose disconnected systems force staff to move data by hand.',
    engagement:
      'After an assessment of your current setup, we propose an implementation project or an ongoing managed arrangement, depending on your needs.',
  },
  {
    slug: 'ui-ux-design',
    icon: 'design',
    title: 'UI/UX Design',
    short:
      'Research, wireframes, prototypes, and design systems that make software clear and pleasant to use.',
    includes: [
      'User flows, wireframes, and interactive prototypes',
      'Visual design and reusable design systems',
      'Usability review of existing products',
      'Developer-ready design specifications and assets',
    ],
    suitableFor:
      'Teams building a new product that needs to be right the first time, or improving an existing product that users find confusing.',
    engagement:
      'Design can be engaged as a standalone phase — for example, to validate an idea before development — or as part of a full development project.',
  },
  {
    slug: 'technical-support-and-maintenance',
    icon: 'support',
    title: 'Technical Support and Maintenance',
    short:
      'Ongoing care for business-critical systems: fixes, updates, monitoring, and steady improvement.',
    includes: [
      'Bug fixing and incident response',
      'Security updates and dependency maintenance',
      'Performance monitoring and improvement',
      'Small enhancements and adjustments as your needs evolve',
    ],
    suitableFor:
      'Organizations running systems built by Apploom or by third parties that need a reliable technical partner to keep them healthy.',
    engagement:
      'Support is provided under a monthly support agreement with agreed response times, or as a prepaid block of hours for occasional needs.',
  },
];
