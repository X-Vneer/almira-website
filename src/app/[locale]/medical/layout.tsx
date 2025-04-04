import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { Hero } from "./_components/hero"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { medicalLogo } from "@/assets"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("medical")
  return {
    title: t("title"),
    description: t("about.text1"),
    icons: {
      icon: medicalLogo.src,
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
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)
  return (
    <>
      <Hero />
      {children}
    </>
  )
}
