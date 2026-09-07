import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, logoAsset } from "@/content/company";
import { footerCompanyNavigation, footerSolutionsNavigation, legalNavigation } from "@/content/navigation";
import type { Locale } from "@/lib/i18n";
import { getLocalizedHomePath, getLocalizedPath } from "@/lib/routes";

const footerCopy: Record<Locale, { solutions: string; company: string; legalContact: string; enquiry: string; discuss: string; rights: string; scope: string }> = {
  en: {
    solutions: "Solutions",
    company: "Company",
    legalContact: "Legal and contact",
    enquiry: "Project enquiry form",
    discuss: "Discuss a Project",
    rights: "All rights reserved.",
    scope: "Casino games, product concepts and iGaming technology."
  },
  ru: {
    solutions: "Решения",
    company: "Компания",
    legalContact: "Правовая информация и контакты",
    enquiry: "Форма запроса проекта",
    discuss: "Обсудить проект",
    rights: "Все права защищены.",
    scope: "Казино-игры, продуктовые концепты и iGaming-технологии."
  },
  hy: {
    solutions: "Լուծումներ",
    company: "Ընկերություն",
    legalContact: "Իրավական և կապ",
    enquiry: "Նախագծի հարցման ձև",
    discuss: "Քննարկել նախագիծը",
    rights: "Բոլոր իրավունքները պաշտպանված են:",
    scope: "Կազինո խաղեր, product concept-ներ և iGaming տեխնոլոգիա:"
  },
  es: {
    solutions: "Soluciones",
    company: "Empresa",
    legalContact: "Legal y contacto",
    enquiry: "Formulario de proyecto",
    discuss: "Hablar de un proyecto",
    rights: "Todos los derechos reservados.",
    scope: "Juegos de casino, conceptos de producto y tecnología iGaming."
  },
  pt: {
    solutions: "Soluções",
    company: "Empresa",
    legalContact: "Legal e contato",
    enquiry: "Formulário de projeto",
    discuss: "Discutir um projeto",
    rights: "Todos os direitos reservados.",
    scope: "Jogos de cassino, conceitos de produto e tecnologia iGaming."
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
            <Link
              href={getLocalizedPath(locale, "/contact")}
              className="mt-5 inline-flex min-h-11 items-center rounded-full border border-emerald/30 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald transition hover:border-emerald/55 hover:bg-emerald/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
            >
              {copy.discuss}
            </Link>
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
                <Link href={getLocalizedPath(locale, "/contact")} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
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
