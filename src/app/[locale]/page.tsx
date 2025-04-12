import { routing } from "@/i18n/routing"
import { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { AboutUs } from "./_components/about-us"
import { ContactUs } from "./_components/contact-us"
import { Facts } from "./_components/facts"
import Gate from "./_components/gate"
import { Hero } from "./_components/hero"
import { Sections } from "./_components/sections"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home")
  return {
    title: t("title"),
    description: t("description"),
  }
}
export default async function Home({
  params,
}: {
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
    <>
      <Hero />
      <AboutUs />
      <Facts />
      <Sections />
      <ContactUs />
      <Gate />
      {/* <Footer /> */}
    </>
  )
}
