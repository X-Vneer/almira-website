import { steelAboutImage } from "@/assets"
import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("contracting.about")
  return (
    <section className=" relative">
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5  md:px-8 relative ">
        {/* Component */}
        <div className="flex flex-col lg:grid items-center justify-items-start lg:gap-8 sm:gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div className=" mx-auto flex flex-col gap-4 py-16 md:py-20  ">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl md:leading-tight  text-primary">
              {t("title")}
            </h2>
            <p className="mb-6">{t("description")}</p>
            <h3 className=" text-xl font-bold md:text-2xl md:leading-tight  text-primary">
              {t("title2")}
            </h3>
            <p className="mb-6">{t("description2")}</p>
            <h3 className=" text-xl font-bold md:text-2xl md:leading-tight  text-primary">
              {t("title3")}
            </h3>
            <p>{t("description3")}</p>
          </div>
          {/* Hero Image */}
          <div className="  relative mx-auto inline-flex items-end   h-full w-full max-w-2xl overflow-hidden">
            <img src={steelAboutImage.src} alt="bg" className="mt-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
