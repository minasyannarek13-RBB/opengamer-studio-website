import { redirect } from "next/navigation";

type HiddenLocalePathProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function HiddenLocalePathPage({ params }: HiddenLocalePathProps) {
  const { path = [] } = await params;
  redirect(path.length ? `/${path.join("/")}` : "/");
}
