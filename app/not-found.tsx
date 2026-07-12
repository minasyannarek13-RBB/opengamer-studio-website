import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="max-w-xl rounded-lg border border-line bg-white/[0.04] p-8 text-center shadow-glow">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-slate-400">The requested OpenGamer page is not available.</p>
        <Link
          className="mt-8 inline-flex rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-emerald/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
