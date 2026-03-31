import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHeader({
  label,
  title,
  description,
  backHref = "/",
  backLabel = "Back to Home",
}: PageHeaderProps) {
  return (
    <div className="pt-32 lg:pt-40 pb-16 lg:pb-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors mb-8"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          {backLabel}
        </Link>
        <span className="block text-[12px] font-medium text-muted tracking-[0.2em] uppercase">
          {label}
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.15]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
