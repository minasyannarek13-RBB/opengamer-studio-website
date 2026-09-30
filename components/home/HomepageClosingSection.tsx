import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const enquiryRoutes = [
  { label: "Game production", href: "/contact?interest=game#project-enquiry" },
  { label: "Dedicated development", href: "/contact?interest=dedicated#project-enquiry" },
  { label: "Technology & integration", href: "/contact?interest=technology#project-enquiry" },
  { label: "Original IP", href: "/contact?interest=portfolio#project-enquiry" }
];

export function HomepageClosingSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(46,230,166,0.12),transparent_28rem),radial-gradient(circle_at_18%_85%,rgba(93,156,255,0.045),transparent_24rem)]" />
      <div aria-hidden="true" className="absolute right-[-9rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full border border-emerald/10" />
      <div aria-hidden="true" className="absolute right-[-2rem] top-[-1rem] h-[19rem] w-[19rem] rounded-full border border-white/[0.04]" />
      <Container className="relative">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-[2px] sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-16">
            <div>
              <p className="premium-kicker text-xs font-semibold uppercase">Start a conversation</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.01] tracking-[-0.025em] sm:text-6xl">Bring the brief. We’ll define the right scope.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Tell us what you are building, where the project stands and what your team needs next. The first conversation stays focused on the commercial and technical gap worth solving.</p>
              <nav className="mt-7 flex flex-wrap gap-2" aria-label="Typical OpenGamer project conversations">
                {enquiryRoutes.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-white/[0.09] bg-black/20 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:border-emerald/30 hover:bg-emerald/[0.05] hover:text-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3 lg:items-stretch">
              <Button href="/contact#project-enquiry" className="w-full">Discuss a Project</Button>
              <Button href="/games" variant="secondary" className="w-full">Explore Games</Button>
              <p className="mt-1 text-xs leading-5 text-slate-500">Start from the scope that matters. Add detail only when it changes the work.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
