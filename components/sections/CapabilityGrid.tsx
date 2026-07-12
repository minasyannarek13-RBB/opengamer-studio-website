import { Card } from "@/components/ui/Card";

export function CapabilityGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item}>
          <div className="mb-4 h-1 w-10 rounded-full bg-cyan" />
          <p className="text-base font-semibold text-white">{item}</p>
        </Card>
      ))}
    </div>
  );
}
