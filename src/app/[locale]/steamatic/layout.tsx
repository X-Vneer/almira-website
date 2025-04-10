import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { Hero } from "./_components/hero"
import { getTranslations } from "next-intl/server"
import { steamaticLogo } from "@/assets"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("steamatic")
  return {
    title: t("title"),
    description: t("about.description"),
    icons: {
      icon: steamaticLogo.src,
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Hero />
      {children}
    </div>
  )
}
