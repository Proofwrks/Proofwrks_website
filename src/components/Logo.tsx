interface LogoProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ size = 32, className = "", variant = "dark" }: LogoProps) {
  const bg = variant === "dark" ? "#0A0A0A" : "#FFFFFF";
  const fg = variant === "dark" ? "#FFFFFF" : "#0A0A0A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="512" height="512" rx="108" fill={bg} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M168 384V128h96c61.86 0 112 50.14 112 112s-50.14 112-112 112h-40v32h-56zm56-88h40c30.93 0 56-25.07 56-56s-25.07-56-56-56h-40v112z"
        fill={fg}
      />
    </svg>
  );
}
