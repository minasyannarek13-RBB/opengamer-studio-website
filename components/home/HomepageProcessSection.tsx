import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const process = [
  { number: "01", title: "Define", text: "Align the product goal, audience, scope and technical constraints before production starts.", output: "Clear scope" },
  { number: "02", title: "Design", text: "Shape mechanics, mathematics, UX, art direction and the architecture the build actually requires.", output: "Build direction" },
  { number: "03", title: "Build", text: "Coordinate production across the required disciplines, from game client and art through backend engineering.", output: "Implemented scope" },
  { number: "04", title: "Deliver", text: "Close QA, support integration and hand the product into the target environment with a defined next step.", output: "Handoff & integration" }
];

export function HomepageProcessSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_48%_8%,rgba(46,230,166,0.055),transparent_25rem)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
          <div>
            <p className="premium-kicker text-xs font-semibold uppercase">From brief to delivery</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-5xl">A production path with a clear output at every stage.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">The shape changes with the project, but the discipline does not: define what matters, design what needs to exist, build the required scope and close with QA plus integration support.</p>
            <div className="mt-8"><Button href="/services" variant="secondary">See Delivery Scope</Button></div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-0 left-[1.3rem] top-0 w-px bg-gradient-to-b from-emerald/50 via-white/10 to-transparent sm:left-[1.55rem]" />
            <div className="space-y-0">
              {process.map((step) => (
                <div key={step.number} className="relative grid gap-5 border-b border-white/10 py-8 pl-14 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:py-10 sm:pl-20">
                  <span className="absolute left-0 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-emerald/25 bg-[#07100d] text-[0.64rem] font-semibold tracking-[0.16em] text-emerald shadow-[0_0_34px_rgba(46,230,166,0.08)] sm:top-10 sm:h-12 sm:w-12">{step.number}</span>
                  <div><h3 className="text-2xl font-semibold tracking-[-0.015em] sm:text-[1.8rem]">{step.title}</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{step.text}</p></div>
                  <span className="w-fit rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-slate-400">{step.output}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">{["Scope before theatre", "Disciplines matched to the project", "Handoff into the target environment"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate-400"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald" /><span>{item}</span></div>)}</div>
      </Container>
    </section>
  );
}
