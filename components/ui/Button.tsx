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
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-center text-sm font-semibold leading-5 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-55 active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none";
  const styles = {
    primary: "bg-emerald text-ink shadow-[0_14px_34px_rgba(46,230,166,0.2)] hover:-translate-y-0.5 hover:bg-emerald/90 hover:shadow-[0_18px_42px_rgba(46,230,166,0.24)]",
    secondary: "border border-white/15 bg-white/[0.06] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:border-emerald/50 hover:bg-white/[0.1] hover:text-white",
    ghost: "text-slate-200 hover:bg-white/[0.07] hover:text-white",
    link: "min-h-0 rounded-none px-0 text-emerald underline-offset-4 hover:translate-x-0.5 hover:underline"
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
