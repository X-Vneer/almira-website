"use client"
import { medical1, medical2, medical3, medicalLogo } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { ArrowRight, Globe } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations()
  return (
    <section className="bg-[#F4F3F3]">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-26">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col gap-10 mx-auto">
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
              className="size-45 rounded-2xl p-5 bg-white shadow-xl mx-auto flex flex-col items-end justify-center"
            >
              <img src={medicalLogo.src} className="w-full" alt="medical" />
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
              className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-center text-primary"
            >
              {t("medical.title")}
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
                    label: t("medical.segment-control.home"),
                    value: "/medical",
                  },
                  {
                    label: t("medical.segment-control.gallery"),
                    value: "/medical/dental",
                  },
                  {
                    label: t("medical.segment-control.projects"),
                    value: "/medical/projects",
                  },
                ]}
              />
            </motion.div>
          </div>
          {/* Hero Image */}
          <div className="  relative mx-auto  aspect-square inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <motion.img
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              src={medical1.src}
              alt="medical"
              className=" absolute  top-0 translate-y-[20%] start-0 rounded-2xl"
            />
            <motion.img
              initial={{
                x: 15,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              src={medical2.src}
              alt="medical"
              className="absolute inline-block w-1/2 start-3 bottom-0 z-[1] rounded-2xl "
            />
            <motion.img
              initial={{
                y: -15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              src={medical3.src}
              alt="medical"
              className="inline-block w-2/3 relative ms-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
