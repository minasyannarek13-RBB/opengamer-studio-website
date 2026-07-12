import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function Section({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`premium-section py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
