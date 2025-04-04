"use client"
import { furnitureLogo, sofaEn, wave } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { ArrowRight, Globe } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations()
  return (
    <section className="bg-[#F4F3F3]">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div className=" flex flex-col gap-10 mx-auto">
            <motion.a
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              href="https://almiracentre.com.sa"
              className="size-42 rounded-2xl p-5 bg-white shadow-xl mx-auto flex flex-col  items-end justify-center"
            >
              <img src={furnitureLogo.src} className="w-full" alt="furniture" />
              <div className="flex gap-1 justify-center w-full">
                <Globe strokeWidth={1} className="text-primary" />
                <ArrowRight
                  strokeWidth={1}
                  className="text-primary ltr:rotate-180"
                />
              </div>
            </motion.a>
            <motion.h1
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 1,
              }}
              className="mb-4 whitespace-nowrap text-4xl font-bold md:text-6xl md:leading-tight text-center text-primary"
            >
              {t("furniture.title")}
            </motion.h1>
            <SegmentedControl
              data={[
                {
                  label: t("segment-control.home"),
                  value: "/furniture",
                },
                {
                  label: t("segment-control.gallery"),
                  value: "/furniture/gallery",
                },
                {
                  label: t("segment-control.projects"),
                  value: "/furniture/projects",
                },
                {
                  label: t("furniture.carpets"),
                  value: "/furniture/carpets",
                },
              ]}
            />
          </div>
          {/* Hero Image */}
          <div className="  relative mx-auto  aspect-square inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <motion.img
              initial={{
                x: 40,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              src={wave.src}
              alt="wave"
              className=" absolute rtl:scale-x-[-1] top-0 inset-x-0"
            />
            <motion.img
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              src={sofaEn.src}
              alt="sofa"
              className="inline-block w-full max-w-2xl relative rtl:scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
