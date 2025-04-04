"use client"
import { facts1, facts2, facts3, facts4 } from "@/assets"
import { useTranslations } from "next-intl"
import CountUp from "react-countup"
import { motion } from "motion/react"

export function Facts() {
  const t = useTranslations("facts")
  return (
    <section className="bg-[#E0ECE5]">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="mb-12 flex flex-col md:justify-between md:flex-row">
          <h2 className="mb-8 text-3xl max-w-lg font-bold md:mb-12 md:text-5xl lg:mb-16">
            {t("title")}
          </h2>
          {/* <p className="text-sm text-gray-500 max-w-lg">
            Consectetur adipiscing elit duis tristique sollicitudin nibh. Augue
            mauris augue neque gravida in fermentum. Sapien pellentesque
            habitant morbi tristique pellentesque.
          </p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* FactsCard */}
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              y: {
                type: "spring",
                stiffness: 250,
              },
              delay: 0,
            }}
            className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80"
          >
            <div className="text-xl font-semibold">
              <h3>
                <CountUp scrollSpyOnce enableScrollSpy end={500} prefix="+ " />
              </h3>
              <p>{t("cards.1")}</p>
            </div>
            <img className="h-40" src={facts1.src} loading="lazy" alt="icon" />
          </motion.div>
          {/* FactsCard */}
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              y: {
                type: "spring",
                stiffness: 250,
              },
              delay: 0.3,
            }}
            className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80"
          >
            <div className="text-xl font-semibold">
              <h3>
                <CountUp scrollSpyOnce enableScrollSpy end={1400} prefix="+ " />
              </h3>
              <p>{t("cards.2")}</p>
            </div>

            <img className="h-40" src={facts2.src} loading="lazy" alt="icon" />
          </motion.div>
          {/* FactsCard */}
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              y: {
                type: "spring",
                stiffness: 250,
              },
              delay: 0.6,
            }}
            className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80"
          >
            <div className="text-xl font-semibold">
              <h3>
                <CountUp scrollSpyOnce enableScrollSpy end={13} prefix="+ " />
              </h3>
              <p>{t("cards.3")}</p>
            </div>

            <img className="h-40" src={facts3.src} loading="lazy" alt="icon" />
          </motion.div>
          {/* FactsCard */}
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              y: {
                type: "spring",
                stiffness: 250,
              },
              delay: 0.9,
            }}
            className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80"
          >
            <div className="text-xl font-semibold">
              <h3>
                <CountUp
                  scrollSpyOnce
                  enableScrollSpy
                  end={10000}
                  prefix="+ "
                />
              </h3>
              <p>{t("cards.4")}</p>
            </div>

            <img className="h-40" src={facts4.src} loading="lazy" alt="icon" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
