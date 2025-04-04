import { getTranslations } from "next-intl/server"
import { AboutUs } from "./_components/about-us"
import { ContactUs } from "./_components/contact-us"
import { Facts } from "./_components/facts"
import Gate from "./_components/gate"
import { Hero } from "./_components/hero"
import { Sections } from "./_components/sections"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home")
  return {
    title: t("title"),
    description: t("description"),
  }
}
export default function Home() {
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
