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
    <section id={id} className={`premium-section py-[4.5rem] sm:py-24 lg:py-28 ${className}`} data-scroll-reveal>
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
