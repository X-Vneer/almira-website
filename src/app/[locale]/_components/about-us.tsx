import { aboutImage } from "@/assets"
import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"

export async function AboutUs() {
  const t = await getTranslations("about")
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-6 md:py-12">
        {/* Component */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8 md:w-3/5 py-20">
            <h2 className="mb-8 text-3xl font-bold md:text-5xl">
              {t("title")}
            </h2>
            <p className="md:text-lg whitespace-pre-line">{t("description")}</p>
            <Link
              href={"/about"}
              className=" w-fit whitespace-nowrap rounded-md bg-primary px-6 py-3 text-center font-semibold text-white"
            >
              {t("learn-more")}
            </Link>
          </div>
          {/* Image */}
          <div className="w-full rounded-md h-full  md:w-2/5">
            <img
              alt="man"
              src={aboutImage.src}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
