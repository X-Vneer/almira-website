import React from "react"
import { Hero } from "./_components/hero"
import { About } from "./_components/about"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import { steelLogo } from "@/assets"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contracting")
  return {
    title: t("title"),
    description: t("about.description"),
    icons: {
      icon: steelLogo.src,
    },
  }
}

import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
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
      <About />
    </>
  )
}

export default Page
