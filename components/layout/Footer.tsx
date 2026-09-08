import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, logoAsset } from "@/content/company";
import { footerCompanyNavigation, footerSolutionsNavigation, legalNavigation } from "@/content/navigation";
import type { Locale } from "@/lib/i18n";
import { getLocalizedHomePath } from "@/lib/routes";

const footerCopy: Record<Locale, { solutions: string; company: string; legalContact: string; enquiry: string; rights: string; scope: string }> = {
  en: {
    solutions: "Solutions",
    company: "Company",
    legalContact: "Legal and contact",
    enquiry: "Project enquiry form",
    rights: "All rights reserved.",
    scope: "Casino games, custom products, live casino concepts and integration-ready technology."
  },
  ru: {
    solutions: "Решения",
    company: "Компания",
    legalContact: "Правовая информация и контакты",
    enquiry: "Форма запроса проекта",
    rights: "Все права защищены.",
    scope: "Казино-игры, кастомные продукты, live casino концепты и интеграционная технология."
  },
  hy: {
    solutions: "Լուծումներ",
    company: "Ընկերություն",
    legalContact: "Իրավական և կապ",
    enquiry: "Նախագծի հարցման ձև",
    rights: "Բոլոր իրավունքները պաշտպանված են:",
    scope: "Կազինո խաղեր, անհատական արտադրանքներ, live casino գաղափարներ և ինտեգրման տեխնոլոգիա:"
  },
  es: {
    solutions: "Soluciones",
    company: "Empresa",
    legalContact: "Legal y contacto",
    enquiry: "Formulario de proyecto",
    rights: "Todos los derechos reservados.",
    scope: "Juegos de casino, productos personalizados, conceptos Live Casino y tecnología lista para integración."
  },
  pt: {
    solutions: "Soluções",
    company: "Empresa",
    legalContact: "Legal e contato",
    enquiry: "Formulario de projeto",
    rights: "Todos os direitos reservados.",
    scope: "Jogos de cassino, produtos personalizados, conceitos Live Casino e tecnologia pronta para integração."
  }
};

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const copy = footerCopy[locale];

  return (
    <footer className="border-t border-white/10 bg-black/40 py-14 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.82fr_0.72fr_0.9fr]" data-scroll-reveal>
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
            <h2 className="text-sm font-semibold text-white">{copy.solutions}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {footerSolutionsNavigation.map((route) => (
                <Link key={route.href + route.label} href={getLocalizedHomePath(locale, route.href)} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">{copy.company}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {footerCompanyNavigation.map((route) => (
                <Link key={route.href} href={getLocalizedHomePath(locale, route.href)} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">{copy.legalContact}</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {legalNavigation.map((route) => (
                <Link key={route.href} href={getLocalizedHomePath(locale, route.href)} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  {route.label}
                </Link>
              ))}
              {company.email ? (
                <a href={`mailto:${company.email}`} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  {company.email}
                </a>
              ) : (
                <Link href={getLocalizedHomePath(locale, "/contact#project-enquiry")} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                  {copy.enquiry}
                </Link>
              )}
            </div>
            {company.social.length ? (
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
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
