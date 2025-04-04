import { lamp, wave } from "@/assets"
import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("furniture.about")
  return (
    <header>
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
              {t("description")}
            </p>
            {/* Hero Button */}
          </div>
          {/* Hero Image */}
          <div className=" max-lg:hidden relative mx-auto  inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <img
              src={wave.src}
              loading="lazy"
              alt="wave"
              className=" absolute ltr:scale-x-[-1] top-1/2 -translate-y-1/2 inset-x-0"
            />
            <img
              loading="lazy"
              src={lamp.src}
              alt="lamp"
              className="inline-block w-1/2 max-w-2xl relative"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
