import { getTranslations } from "next-intl/server"

export async function About() {
  const t = await getTranslations("optics.about")
  return (
    <section>
      {/* Hero Container */}
      <div className="mx-auto w-full   py-16 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start">
          {/* Hero Content */}
          <div className="flex flex-col max-lg:text-center md:px-8  px-5 mx-auto">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-primary">
              {t("title")}
            </h1>
            <p className="mb-6 text-center mx-auto max-w-lg whitespace-pre-line text-sm text-black sm:text-xl md:mb-10 lg:mb-12">
              {t("description")}
            </p>
            {/* Hero Button */}
          </div>
        </div>
      </div>
    </section>
  )
}
