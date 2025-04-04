"use client"
import { bgShape, building, orangeBG, steel, steelLogo } from "@/assets"
import SegmentedControl from "@/components/segment-control"
import { ArrowRight, Globe } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("contracting")
  return (
    <section className="bg-[#F4F3F3] relative">
      <img
        src={bgShape.src}
        className="w-2/3 absolute bottom-0 end-0"
        alt="background"
      />
      <img
        src={steel.src}
        className=" absolute bottom-0 end-0"
        alt="background"
      />

      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5  md:px-8 relative ">
        {/* Component */}
        <div className="flex flex-col-reverse lg:grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Image */}
          <div className="  relative mx-auto  inline-flex items-center justify-center  h-full w-full max-w-2xl overflow-hidden">
            <img
              src={orangeBG.src}
              className="h-full absolute start-0"
              alt="background"
            />
            <motion.img
              initial={{
                y: 35,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0,
                duration: 1,
              }}
              src={building.src}
              alt="building"
              className=" h-full z-[1]"
            />
          </div>
          {/* Hero Content */}
          <div className="flex flex-col gap-8 mx-auto  py-16 ">
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
              href="https://al-mira.com"
              className="size-45 rounded-2xl p-5 bg-white shadow-xl mx-auto flex flex-col items-end justify-center"
            >
              <img src={steelLogo.src} className="w-full" alt="logo" />
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
              className="mb-2 text-3xl font-bold md:text-4xl md:leading-tight text-center text-primary"
            >
              {t("title")}
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
                    label: t("segment-control.home"),
                    value: "/contracting",
                  },
                  {
                    label: t("segment-control.services"),
                    value: "https://al-mira.com/index.php/services",
                  },
                  {
                    label: t("segment-control.projects"),
                    value: "https://al-mira.com/index.php/projects",
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
