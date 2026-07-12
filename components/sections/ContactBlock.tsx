import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type ContactItem = {
  title: string;
  body: string;
  href?: string;
};

export function ContactBlock({ items = [] }: { items?: ContactItem[] }) {
  const contactItems =
    items.length > 0
      ? items
      : [
          { title: "Portfolio Inquiry", body: "Placeholder route for portfolio discussions.", href: "/portfolio" },
          { title: "Project Scope", body: "Placeholder route for custom development inquiries.", href: "/contact" }
        ];

  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Contact Placeholder</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {contactItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
            {item.href ? (
              <Button href={item.href} variant="secondary" className="mt-4 w-full">
                Open
              </Button>
            ) : null}
          </div>
        ))}
      </div>
    </Card>
  );
}
