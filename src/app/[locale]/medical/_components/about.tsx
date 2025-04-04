import { bed1, bed2, lamp, wave } from "@/assets"
import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("medical.about")
  return (
    <section>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col max-lg:text-center">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-primary">
              {t("title")}
            </h1>
            <p className="mb-6 max-lg:mx-auto max-w-lg whitespace-pre-line text-sm text-black sm:text-xl md:mb-10 lg:mb-12">
              {t("text1")}
            </p>
            {/* Hero Button */}
          </div>
          {/* Hero Image */}
          <div className=" max-lg:hidden relative mx-auto  inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <img
              loading="lazy"
              src={bed1.src}
              alt="lamp"
              className="inline-block w-full max-w-2xl relative"
            />
          </div>
        </div>
      </div>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 ">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Image */}
          <div className=" max-lg:hidden relative mx-auto  inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <img
              loading="lazy"
              src={bed2.src}
              alt="lamp"
              className="inline-block w-full max-w-2xl relative"
            />
          </div>
          {/* Hero Content */}
          <div className="flex flex-col max-lg:text-center">
            {/* Hero Title */}
            <p className="mb-6 max-lg:mx-auto max-w-lg whitespace-pre-line text-sm text-black sm:text-xl md:mb-10 lg:mb-12">
              {t("text2")}
            </p>
            {/* Hero Button */}
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5  md:px-8 mb-20 ">
        <p className=" whitespace-pre-line text-lg">{t("text3")}</p>
      </div>
    </section>
  )
}
