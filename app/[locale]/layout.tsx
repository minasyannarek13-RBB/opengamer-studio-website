import { notFound } from "next/navigation";
import { isLocalizedLocale, localizedLocales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocalizedLocale(locale)) {
    notFound();
  }

  return children;
}
