import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1DA851] shadow-md hover:shadow-lg",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-200 text-sm sm:text-base cursor-pointer";

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
