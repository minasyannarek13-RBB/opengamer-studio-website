import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, logoAsset } from "@/content/company";
import { footerCompanyNavigation, legalNavigation } from "@/content/navigation";
import type { Locale } from "@/lib/i18n";
import { getLocalizedHomePath, getLocalizedPath } from "@/lib/routes";

const footerCopy: Record<Locale, { company: string; legal: string; contact: string; enquiry: string; rights: string; scope: string }> = {
  en: {
    company: "Company",
    legal: "Legal",
    contact: "Contact",
    enquiry: "Project enquiry form",
    rights: "All rights reserved.",
    scope: "Casino game development, product engineering and integration support."
  },
  ru: {
    company: "Компания",
    legal: "Правовая информация",
    contact: "Контакты",
    enquiry: "Форма запроса проекта",
    rights: "Все права защищены.",
    scope: "Разработка казино-игр, продуктовая инженерия и поддержка интеграций."
  },
  hy: {
    company: "Ընկերություն",
    legal: "Իրավական",
    contact: "Կապ",
    enquiry: "Նախագծի հարցման ձև",
    rights: "Բոլոր իրավունքները պաշտպանված են:",
    scope: "Կազինո խաղերի մշակում, արտադրանքի ինժեներիա և ինտեգրման աջակցություն:"
  },
  es: {
    company: "Empresa",
    legal: "Legal",
    contact: "Contacto",
    enquiry: "Formulario de proyecto",
    rights: "Todos los derechos reservados.",
    scope: "Desarrollo de juegos de casino, ingeniería de producto y soporte de integración."
  },
  pt: {
    company: "Empresa",
    legal: "Legal",
    contact: "Contato",
    enquiry: "Formulario de projeto",
    rights: "Todos os direitos reservados.",
    scope: "Desenvolvimento de jogos de cassino, engenharia de produto e suporte a integração."
  }
};

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const copy = footerCopy[locale];

  return (
    <footer className="border-t border-white/10 bg-black/40 py-14 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.72fr_0.72fr_1fr]" data-scroll-reveal>
          <div>
            <Image
              src={logoAsset.src}
              alt={logoAsset.alt}
              width={logoAsset.width}
              height={logoAsset.height}
              className="h-10 w-auto"
              sizes="150px"
            />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">{company.description}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">{copy.company}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {footerCompanyNavigation.map((route) => (
                <Link key={route.href} href={getLocalizedHomePath(locale, route.href)} className="hover:text-white">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">{copy.legal}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {legalNavigation.map((route) => (
                <Link key={route.href} href={getLocalizedHomePath(locale, route.href)} className="hover:text-white">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">{copy.contact}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {company.email ? (
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              ) : (
                <Link href={getLocalizedPath(locale, "/contact")} className="hover:text-white">
                  {copy.enquiry}
                </Link>
              )}
            </div>
            {company.social.length ? (
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 OpenGamer. {copy.rights}</p>
          <p>{copy.scope}</p>
        </div>
      </Container>
    </footer>
  );
}
