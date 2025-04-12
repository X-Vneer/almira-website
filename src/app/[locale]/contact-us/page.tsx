import { useTranslations } from "next-intl"
import React from "react"

import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)
  const t = await getTranslations("contact-us")
  return (
    <section className="mb-20 pt-20">
      {/* Container */}

      <div>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
            {t("title")}
          </h2>
          {/* Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* Item */}
            <div className="relative p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                {t("emails")}
              </h3>
              <a
                href="mailto:info@almiracentre.com"
                className="text-sm text-gray-500"
              >
                info@almiracentre.com
              </a>
              <div className="absolute right-0 top-1/3 hidden h-2/5 border-r border-gray-300 md:block"></div>
            </div>
            {/* Item */}
            <div className="relative p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                {t("phone-numbers")}
              </h3>
              <p dir="ltr" className="rtl:text-right text-sm text-gray-500">
                +966 13 827 3792
              </p>
              <p dir="ltr" className="rtl:text-right text-sm text-gray-500">
                +966 13 827 3792
              </p>
              <div className="absolute right-0 top-1/3 hidden h-2/5 border-r border-gray-300 md:block"></div>
            </div>
            {/* Item */}
            <div className="p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                {t("address")}
              </h3>
              <p className="text-sm text-gray-500">{t("address-1")}</p>
              <p className="text-sm text-gray-500">{t("address-2")}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Form */}
        <form
          name="wf-form-name"
          method="get"
          className="mx-auto mb-4 text-left sm:px-4 md:px-20"
        >
          <div className="mb-4 grid w-full grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="mb-1 font-medium">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                required
                className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 font-medium">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="mb-4 grid w-full grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone-number" className="mb-1 font-medium">
                {t("form.phone-number")}
              </label>
              <input
                type="text"
                required
                id="phone-number"
                className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 font-medium">
                {t("form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                required
                className=" block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
              />
            </div>
          </div>

          <div className="mb-5 md:mb-6 lg:mb-8">
            <label htmlFor="message" className="mb-1 font-medium">
              {t("form.message")}
            </label>
            <textarea
              placeholder=""
              id="message"
              required
              maxLength={5000}
              name="message"
              className="mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded-md cursor-pointer bg-primary px-6 py-3 text-center font-semibold text-white"
          >
            {t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Page
