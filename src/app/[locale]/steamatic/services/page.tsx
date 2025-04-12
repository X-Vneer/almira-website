import { vacumeAr } from "@/assets"
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
  const t = await getTranslations("steamatic.services-page")
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl md:mb-10">
          {t("title")}
        </h2>
        <p className="mb-8 max-w-2xl  text-gray-600  md:mb-16">
          {t("description")}
        </p>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <img
            src={vacumeAr.src}
            alt="vacume"
            className="inline-block h-full w-full rounded-2xl object-contain ltr:scale-x-[-1]"
          />
          <div className="flex col-span-2 flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-12">
            <p className="text-sm whitespace-pre-line text-gray-500 sm:text-base">
              {t("details")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
