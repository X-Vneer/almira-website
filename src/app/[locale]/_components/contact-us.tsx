import { getTranslations } from "next-intl/server"
import Link from "next/link"

export async function ContactUs() {
  const t = await getTranslations("home.contact-us")
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 bg-gray-100 p-6 sm:p-10 md:justify-items-start md:p-16">
          <div className="text-center md:text-start flex-1 max-w-md">
            <h2 className="mb-3 text-3xl font-bold md:text-5xl text-left">
              {t("title")}
            </h2>
            {/* <p className="max-w-md text-sm sm:test-base text-gray-500 text-left mb-2">
              FOR MORE INFORMATION
            </p> */}
          </div>
          <div className=" max-w-lg flex  items-center justify-center ">
            <Link
              href="/contact-us"
              className=" rounded-md border border-primary  px-10 py-3 text-center font-semibold text-primary"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
