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
  const t = await getTranslations("furniture.projects")
  // Get all project values as an array
  // @ts-ignore
  const governmentProjects = Object.values(t.raw("projects.government"))
  // @ts-ignore
  const company = Object.values(t.raw("projects.company"))
  // @ts-ignore
  const hotel = Object.values(t.raw("projects.hotel"))
  // @ts-ignore
  const mosque = Object.values(t.raw("projects.mosque"))
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 p-4 py-20 ">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-red-600 font-bold text-lg">
            {t("governmentProjects")}
          </h2>
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            {governmentProjects.map((project, index) => (
              <li key={index}>{project as string}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-red-600 font-bold text-lg">
            {t("companyProjects")}
          </h2>
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            {company.map((project, index) => (
              <li key={index}>{project as string}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-red-600 font-bold text-lg">
            {t("hotelProjects")}
          </h2>
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            {hotel.map((project, index) => (
              <li key={index}>{project as string}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-red-600 font-bold text-lg">
            {t("mosqueProjects")}
          </h2>
          <ul className="list-disc pl-5 mt-2 text-gray-800">
            {mosque.map((project, index) => (
              <li key={index}>{project as string}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page
