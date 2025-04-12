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
  const t = await getTranslations("steamatic.customers")
  // Get all project values as an array
  // @ts-ignore
  const first = Object.values(t.raw("first"))
  // @ts-ignore
  const second = Object.values(t.raw("second"))

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2   max-w-[900px] mx-auto gap-4 p-4 py-20 ">
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            {first.map((project, index) => (
              <li key={index}>{project as string}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            {second.map((project, index) => (
              <li key={index}>{project as string}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page
