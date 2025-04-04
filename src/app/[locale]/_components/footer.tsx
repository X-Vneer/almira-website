import { footerLogo } from "@/assets"
import { navItems } from "@/content/site"
import { Link } from "@/i18n/navigation"
import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="block bg-primary">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="md:flex-row flex justify-between flex-col">
          {/* <h2 className="font-bold text-3xl uppercase md:text-5xl w-full max-w-xl text-white">
            {t("home.footer.title")}
          </h2> */}
          <img src={footerLogo.src} className="h-32" alt="almira group" />
          <div className="md:flex-row flex  flex-col gap-16">
            <div className="mt-8 md:mt-0">
              <div className="mb-4 flex max-w-72 items-start gap-4 justify-start">
                <MapPin size={24} className="text-gray-200 shrink-0" />
                <p className="text-gray-200 text-sm sm:text-base">
                  {t("home.footer.location")}
                </p>
              </div>
              <div className="mb-4 gap-4 flex max-w-72 items-start justify-start">
                <Mail size={24} className="text-gray-200 shrink-0" />
                <a
                  href="mailto:info@almiracentre.com"
                  className="text-gray-200  text-sm sm:text-base"
                >
                  info@almiracentre.com
                </a>
              </div>
              <div className="mb-4 gap-4 flex max-w-72 items-start justify-start">
                <Phone size={24} className="text-gray-200 shrink-0" />
                <a
                  dir="ltr"
                  href="tel:+966 13 827 3792"
                  className="text-gray-200  text-sm sm:text-base "
                >
                  +966 13 827 3792
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0 space-y-2">
              <p className="text-gray-200 text-xl pb-2 font-semibold ">
                {t("home.footer.sections.title")}
              </p>
              {navItems.map((element) => {
                if (typeof element.link === "string") return
                return element.link.map((e) => (
                  <Link
                    key={e.link}
                    href={e.link}
                    className="block font-normal text-gray-200 transition hover:text-white  py-1.5  "
                  >
                    {t(`header.${e.label}`)}
                  </Link>
                ))
              })}
            </div>
          </div>
        </div>
        <div className="mb-14 w-full border-b border-white mt-16"></div>
        <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <div className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
            {navItems.map((e) => {
              if (typeof e.link !== "string") return
              return (
                <Link
                  key={e.link}
                  href={e.link}
                  className="inline-block font-normal text-gray-200 transition hover:text-white sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
                >
                  {t(`header.${e.label}`)}
                </Link>
              )
            })}
          </div>
          <p className="text-gray-200 text-sm sm:text-base">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
