import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { Hero } from "./_components/hero"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { steamaticLogo } from "@/assets"
import { notFound } from "next/navigation"

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
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)
  return (
    <div>
      <Hero />
      {children}
    </div>
  )
}
