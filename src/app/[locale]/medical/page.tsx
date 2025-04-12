import { routing } from "@/i18n/routing"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { About } from "./_components/about"

export default async function Page({
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
      <About />
    </>
  )
}
