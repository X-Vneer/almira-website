import { getTranslations } from "next-intl/server"
import React from "react"

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
  const t = await getTranslations("medical.projects")
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="mb-8 text-3xl font-bold md:text-6xl md:mb-10">
          {t("title")}
        </h2>
        <p className="mb-8 md:mb-16 text-lg   whitespace-pre-line">
          {t("description")}
        </p>
      </div>
    </section>
  )
}

export default Page
