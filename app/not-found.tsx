import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[70vh] items-center justify-center px-5 py-20">
        <div className="premium-card surface-hairline max-w-xl rounded-2xl border border-white/10 bg-white/[0.045] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">404</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-400">The requested OpenGamer page is not available. You can return to the studio homepage, continue with the game catalogue or contact the team about a project.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to Home</Button>
            <Button href="/games" variant="secondary">Explore Games</Button>
            <Button href="/contact#project-enquiry" variant="secondary">Discuss a Project</Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
