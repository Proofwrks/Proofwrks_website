export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: "Active" | "Building" | "Coming Soon";
  color: string;
  accentColor: string;
  features: string[];
  useCases: string[];
  techStack: string[];
}

export const products: Product[] = [
  {
    slug: "aether",
    name: "Aether",
    category: "Infrastructure",
    tagline: "Cloud-native infrastructure management for distributed teams",
    description:
      "Aether is a cloud-native infrastructure management platform purpose-built for distributed engineering teams. It provides a unified control plane for provisioning, monitoring, and scaling infrastructure across multi-cloud environments — without the complexity of stitching together dozens of fragmented tools.",
    status: "Coming Soon",
    color: "bg-blue-500/10 text-blue-600",
    accentColor: "#3b82f6",
    features: [
      "Unified multi-cloud control plane",
      "Infrastructure-as-code with visual workflows",
      "Real-time cost optimization engine",
      "Zero-downtime deployment orchestration",
      "Built-in compliance and audit trails",
      "Team-based access control and environments",
    ],
    useCases: [
      "Engineering teams managing infrastructure across AWS, GCP, and Azure",
      "Companies transitioning from monolith to microservice architectures",
      "Organizations requiring SOC 2 and ISO 27001 compliance",
    ],
    techStack: ["Go", "Kubernetes", "gRPC", "PostgreSQL", "Redis", "Terraform"],
  },
  {
    slug: "veritas",
    name: "Veritas",
    category: "Data & Analytics",
    tagline: "Real-time data validation for enterprise pipelines",
    description:
      "Veritas is a real-time data validation and quality assurance engine designed for enterprise data pipelines. It sits between your data sources and warehouses, continuously monitoring data integrity, detecting anomalies, and preventing bad data from corrupting downstream analytics and ML models.",
    status: "Coming Soon",
    color: "bg-emerald-500/10 text-emerald-600",
    accentColor: "#10b981",
    features: [
      "Schema drift detection and alerting",
      "Statistical anomaly detection in real-time",
      "Data lineage tracking and impact analysis",
      "Custom validation rules with SQL and Python",
      "Integration with dbt, Airflow, and Spark",
      "Automated data quality scorecards",
    ],
    useCases: [
      "Data teams ensuring pipeline reliability at scale",
      "Companies with strict data governance requirements",
      "ML teams preventing model degradation from bad training data",
    ],
    techStack: ["Python", "Apache Kafka", "ClickHouse", "dbt", "React", "FastAPI"],
  },
  {
    slug: "nexus",
    name: "Nexus",
    category: "Developer Tools",
    tagline: "Unified API gateway for modern microservice architectures",
    description:
      "Nexus is a unified API gateway and service mesh built for modern microservice architectures. It eliminates the complexity of managing API routing, authentication, rate limiting, and observability across hundreds of services — giving platform teams a single pane of glass for their entire API surface.",
    status: "Coming Soon",
    color: "bg-violet-500/10 text-violet-600",
    accentColor: "#8b5cf6",
    features: [
      "Automatic API discovery and documentation",
      "Universal authentication and authorization layer",
      "Intelligent request routing and load balancing",
      "Built-in rate limiting and circuit breakers",
      "Full observability with traces, metrics, and logs",
      "Developer portal with interactive API explorer",
    ],
    useCases: [
      "Platform teams managing large microservice ecosystems",
      "Companies standardizing API patterns across teams",
      "Organizations building developer-facing API products",
    ],
    techStack: ["Rust", "Envoy", "OpenTelemetry", "TypeScript", "PostgreSQL", "NATS"],
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    category: "Security",
    tagline: "Automated compliance monitoring for regulated industries",
    description:
      "Sentinel is an automated compliance monitoring and threat detection platform built specifically for regulated industries. It continuously monitors infrastructure, applications, and access patterns against compliance frameworks like SOC 2, HIPAA, PCI DSS, and GDPR — flagging violations in real-time before they become audit findings.",
    status: "Coming Soon",
    color: "bg-amber-500/10 text-amber-600",
    accentColor: "#f59e0b",
    features: [
      "Continuous compliance monitoring against 10+ frameworks",
      "Automated evidence collection for audits",
      "Real-time threat detection and response",
      "Identity and access anomaly detection",
      "Vendor risk scoring and monitoring",
      "Audit-ready reporting and dashboards",
    ],
    useCases: [
      "Fintech companies navigating SOC 2 and PCI DSS",
      "Healthcare organizations maintaining HIPAA compliance",
      "Any company preparing for or maintaining security certifications",
    ],
    techStack: ["Go", "Elasticsearch", "Kafka", "React", "PostgreSQL", "Terraform"],
  },
];
