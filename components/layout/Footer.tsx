import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, logoAsset } from "@/content/company";
import { footerCompanyNavigation, footerSolutionsNavigation, legalNavigation } from "@/content/navigation";
import type { Locale } from "@/lib/i18n";
import { getLocalizedHomePath } from "@/lib/routes";

const footerCopy: Record<Locale, { solutions: string; company: string; legalContact: string; enquiry: string; rights: string; scope: string; proof: string; contact: string }> = {
  en: {
    solutions: "Solutions",
    company: "Company",
    legalContact: "Legal and contact",
    enquiry: "Project enquiry form",
    rights: "All rights reserved.",
    scope: "Casino games, original IP, product engineering and integration-oriented development.",
    proof: "Selected work",
    contact: "Discuss a project"
  },
  ru: {
    solutions: "Решения",
    company: "Компания",
    legalContact: "Правовая информация и контакты",
    enquiry: "Форма запроса проекта",
    rights: "Все права защищены.",
    scope: "Казино-игры, оригинальные IP, продуктовая разработка и интеграционные решения.",
    proof: "Избранные работы",
    contact: "Обсудить проект"
  },
  hy: {
    solutions: "Լուծումներ",
    company: "Ընկերություն",
    legalContact: "Իրավական և կապ",
    enquiry: "Նախագծի հարցման ձև",
    rights: "Բոլոր իրավունքները պաշտպանված են:",
    scope: "Կազինո խաղեր, օրիգինալ IP, արտադրանքի ինժեներիա և ինտեգրման զարգացում:",
    proof: "Ընտրված աշխատանքներ",
    contact: "Քննարկել նախագիծը"
  },
  es: {
    solutions: "Soluciones",
    company: "Empresa",
    legalContact: "Legal y contacto",
    enquiry: "Formulario de proyecto",
    rights: "Todos los derechos reservados.",
    scope: "Juegos de casino, IP original, ingeniería de producto y desarrollo orientado a integraciones.",
    proof: "Trabajo seleccionado",
    contact: "Hablar de un proyecto"
  },
  pt: {
    solutions: "Soluções",
    company: "Empresa",
    legalContact: "Legal e contato",
    enquiry: "Formulario de projeto",
    rights: "Todos os direitos reservados.",
    scope: "Jogos de cassino, IP original, engenharia de produto e desenvolvimento orientado a integrações.",
    proof: "Trabalho selecionado",
    contact: "Discutir um projeto"
  }
};

const proofLinks = [
  { label: "Forest Fortune", meta: "Playable slot", href: "/games/forest-fortune" },
  { label: "ELEMENTALS", meta: "Original Live Casino IP", href: "/portfolio/elementals" },
  { label: "LC App", meta: "B2B product concept", href: "/portfolio/lc-app" }
];

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const copy = footerCopy[locale];

  return (
    <footer className="border-t border-white/10 bg-black/40 py-14 sm:py-16">
      <Container>
        <div className="mb-10 grid gap-3 border-b border-white/10 pb-8 sm:grid-cols-3" aria-label={copy.proof}>
          {proofLinks.map((item) => (
            <Link
              key={item.label}
              href={getLocalizedHomePath(locale, item.href)}
              className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition hover:border-emerald/25 hover:bg-white/[0.045] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
            >
              <span>
                <span className="block text-sm font-semibold text-white">{item.label}</span>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">{item.meta}</span>
              </span>
              <span className="text-emerald transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>

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
              href={getLocalizedHomePath(locale, "/contact#project-enquiry")}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
            >
              {copy.contact} <span aria-hidden="true">→</span>
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
          <p className="max-w-xl sm:text-right">{copy.scope}</p>
        </div>
      </Container>
    </footer>
  );
}
