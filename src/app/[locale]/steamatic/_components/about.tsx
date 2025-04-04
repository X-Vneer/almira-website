import { vacumeBgAr } from "@/assets"
import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("steamatic.about")
  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full   py-16 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col max-lg:text-center md:px-8  px-5 mx-auto">
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
          <div className=" max-lg:hidden relative ms-auto  inline-flex items-center justify-center  h-full w-full max-w-2xl">
            <img
              loading="lazy"
              src={vacumeBgAr.src}
              alt="vacume"
              className="inline-block w-full max-w-2xl relative ltr:scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
