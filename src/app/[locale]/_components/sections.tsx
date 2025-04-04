"use client"
import {
  carpetBg,
  furnitureLogo,
  medicalBg,
  medicalLogo,
  opticsBg,
  opticsLogo,
  steamaticLogo,
  steelBg,
  steelLogo,
  stematicBg,
} from "@/assets"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

export function Sections() {
  const t = useTranslations("sections")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <section ref={ref}>
      {/* Container */}
      <div className=" perspective-midrange mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <motion.h2
          initial={{
            y: 15,
            opacity: 0,
            rotateX: -90,
          }}
          animate={
            isInView
              ? {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0,
            duration: 1,
          }}
          className="text-center text-3xl font-bold md:text-5xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{
            y: 15,
            opacity: 0,
            rotateX: -90,
          }}
          animate={
            isInView
              ? {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className=" mb-4 mt-4 text-center text-lg text-gray-500 md:mb-12 lg:mb-16"
        >
          {t("companies")}
        </motion.p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 mg:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Item */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
          >
            <Link
              href={"/furniture"}
              className="relative flex h-[300px] items-end shadow-lg rounded-xl"
            >
              <img
                alt="furniture logo"
                src={carpetBg.src}
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <img
                  src={furnitureLogo.src}
                  alt="logo"
                  className="block h-20 object-contain"
                />
                <p className="text-sm sm:text-base">{t("furniture")}</p>
              </div>
            </Link>
          </motion.div>
          {/* Item */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.4,
            }}
          >
            <Link
              href={"/medical"}
              className="relative flex h-[300px] items-end shadow-lg rounded-xl"
            >
              <img
                src={medicalBg.src}
                alt="logo"
                className="block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <img
                  src={medicalLogo.src}
                  alt="logo"
                  className="block h-20 object-contain"
                />
                <p className="text-sm sm:text-base">{t("medical")}</p>
              </div>
            </Link>
          </motion.div>
          {/* Item */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
          >
            <Link
              href={"/contracting"}
              className="relative flex h-[300px] items-end shadow-lg rounded-xl"
            >
              <img
                src={steelBg.src}
                alt="logo"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <img
                  src={steelLogo.src}
                  alt="logo"
                  className="block h-20 object-contain"
                />
                <p className="text-sm sm:text-base">{t("contracting")}</p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className="h-20"></div>

        <motion.p
          initial={{
            y: 15,
            opacity: 0,
            rotateX: -90,
          }}
          whileInView={{
            y: 0,
            rotateX: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0,
            duration: 1,
          }}
          className=" mb-4 mt-4 text-center text-lg text-gray-500 md:mb-12 lg:mb-16"
        >
          {t("sister-companies")}
        </motion.p>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
          {/* Item */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.2,
            }}
          >
            <Link
              href={"/optics"}
              className="relative flex h-[300px] items-end shadow-lg rounded-xl"
            >
              <img
                src={opticsBg.src}
                alt="logo"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <img
                  src={opticsLogo.src}
                  alt="logo"
                  className="block h-full w-full rounded-lg object-cover"
                />
                <p className="text-sm sm:text-base">{t("optics")}</p>
              </div>
            </Link>
          </motion.div>
          {/* Item */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
          >
            <Link
              href={"/steamatic"}
              className="relative flex h-[300px] items-end shadow-lg rounded-xl"
            >
              <img
                src={stematicBg.src}
                alt="logo"
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <img
                  src={steamaticLogo.src}
                  alt="logo"
                  className="block h-full w-full rounded-lg object-cover"
                />
                <p className="text-sm sm:text-base">{t("steamatic")}</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
