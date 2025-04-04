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

const Page = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Page
