import { medical3 } from "@/assets"
import { getTranslations } from "next-intl/server"
import React from "react"

const Page = async () => {
  const t = await getTranslations("medical.about-page")
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl md:mb-10">
          {t("title")}
        </h2>
        <p className="mb-8 max-w-2xl  text-gray-600  md:mb-16">
          {t("description")}
        </p>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <img
            src={medical3.src}
            alt="almira medical"
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex col-span-2 flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("details.title")}
            </h2>
            <p className="text-sm whitespace-pre-line text-gray-500 sm:text-base">
              {t("details.text1")}
            </p>
            <h2 className="text-xl font-bold md:text-2xl text-primary">
              {t("details.text4")}
            </h2>
            <p className="text-sm whitespace-pre-line text-gray-500 sm:text-base">
              {t("details.text5")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
