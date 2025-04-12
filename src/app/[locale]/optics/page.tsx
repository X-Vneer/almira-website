import { banner } from "@/assets"
import MarqueeSection from "./_components/marquee"
import { About } from "./_components/about"

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
      <MarqueeSection />
      <div className="h-[50vh] ">
        <img
          src={banner.src}
          className="w-full h-full object-cover"
          alt="banner"
        />
      </div>
      <About />
    </>
  )
}

export default Page
