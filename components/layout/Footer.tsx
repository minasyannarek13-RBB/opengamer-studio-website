import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, logoAsset } from "@/content/company";
import { legalNavigation, mainNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/35 py-12 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.72fr_0.72fr_1fr]">
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
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {mainNavigation.map((route) => (
                <Link key={route.href} href={route.href} className="hover:text-white">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Legal</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              {legalNavigation.map((route) => (
                <Link key={route.href} href={route.href} className="hover:text-white">
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="hover:text-white">
                {company.phone}
              </a>
              <p>{company.address}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
              {company.social.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 OpenGamer. All rights reserved.</p>
          <p>iGaming technology, game production and integration support.</p>
        </div>
      </Container>
    </footer>
  );
}
