"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-20">
      <div className="premium-card surface-hairline max-w-xl rounded-2xl border border-white/10 bg-white/[0.045] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-10" role="alert">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Something interrupted the page</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-400">The page could not be loaded correctly. Retry the current view without losing your place.</p>
        <div className="mt-8 flex justify-center">
          <Button type="button" onClick={() => reset()}>Try Again</Button>
        </div>
      </div>
    </main>
  );
}
