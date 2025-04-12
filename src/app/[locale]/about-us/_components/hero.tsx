import { aboutImage } from "@/assets"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("about-page")
  return (
    <section className="mb-10 ">
      {/* Hero top */}
      <div className="bg-primary/85 lg:pt-16">
        {/* Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12 md:leading-tight text-white">
            {t("title")}
          </h1>
        </div>
      </div>
      {/* Hero bottom */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="relative flex max-w-7xl flex-col gap-4 md:flex-row lg:justify-end">
          <div className="max-w-2xl md:mr-[470px]  md:max-w-md lg:mr-auto">
            {/* Title */}
            <h3 className="text-2xl font-bold md:text-3xl">
              {t("introduction")}
            </h3>
            {/* Divider */}
            <div className="my-6 w-16 border-t border-black"></div>
            <p className="text-lg whitespace-pre-line text-gray-500">
              {t("description")}
            </p>
          </div>
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden -bottom-6 md:-right-6 mt-20  md:w-[400px] lg:w-[480px] object-cover md:absolute md:mt-0 md:h-[480px] c-h-480px">
            <img
              src={aboutImage.src}
              alt="a main "
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
