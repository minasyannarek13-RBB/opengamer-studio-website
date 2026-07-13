import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function Section({
  children,
  id,
  className = ""
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`premium-section py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
