"use client"
import { opticsLogo } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { useTranslations } from "next-intl"
import { motion } from "motion/react"

export function Hero() {
  const t = useTranslations()
  return (
    <section className="bg-[#F4F3F3]">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-26">
        {/* Component */}
        <div className="grid items-center justify-items-start">
          {/* Hero Content */}
          <div className="flex flex-col gap-10 mx-auto  pt-10">
            <motion.div
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
              className="size-40 rounded-2xl p-5 bg-white shadow-xl mx-auto flex items-end justify-center"
            >
              <img src={opticsLogo.src} className="w-full" alt="furniture" />
            </motion.div>
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
              className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-center text-primary"
            >
              {t("optics.title")}
            </motion.h1>
            <motion.div
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
                duration: 1,
              }}
            >
              <SegmentedControl
                data={[
                  {
                    label: t("optics.segment-control.home"),
                    value: "/optics",
                  },
                  {
                    label: t("optics.segment-control.gallery"),
                    value: "/optics/gallery",
                  },
                  {
                    label: t("optics.segment-control.brands"),
                    value: "/optics/brands",
                  },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
