import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  className?: string;
};

type LinkButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  if (typeof props.href === "string") {
    return <LinkButton {...(props as LinkButtonProps)} />;
  }

  return <NativeButton {...(props as NativeButtonProps)} />;
}

function getButtonClasses(variant: ButtonBaseProps["variant"] = "primary", className = "") {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-55";
  const styles = {
    primary: "bg-emerald text-ink shadow-[0_14px_34px_rgba(35,196,131,0.18)] hover:bg-emerald/90",
    secondary: "border border-white/15 bg-white/[0.055] text-slate-100 hover:border-emerald/50 hover:bg-white/[0.08] hover:text-white",
    ghost: "text-slate-200 hover:bg-white/[0.07] hover:text-white",
    link: "min-h-0 rounded-none px-0 text-emerald underline-offset-4 hover:underline"
  }[variant];

  return `${base} ${styles} ${className}`;
}

function LinkButton({ children, href, variant, className, ...anchorProps }: LinkButtonProps) {
  return (
    <Link href={href} className={getButtonClasses(variant, className)} {...anchorProps}>
      {children}
    </Link>
  );
}

function NativeButton({ children, variant, className, ...buttonProps }: NativeButtonProps) {
  return (
    <button className={getButtonClasses(variant, className)} {...buttonProps}>
      {children}
    </button>
  );
}
