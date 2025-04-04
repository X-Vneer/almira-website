import {
  furnitureLogo,
  medicalLogo,
  opticsLogo,
  steamaticLogo,
  steelLogo,
} from "@/assets"
import { useTranslations } from "next-intl"

export function Companies() {
  const t = useTranslations("about-page.companies")
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12">
        {/* <!-- Component --> */}
        <div className="flex flex-col gap-16">
          {/* <!-- Title --> */}
          <div className="flex max-w-5xl flex-col items-start gap-2.5 lg:flex-row lg:items-center">
            <h2 className="text-3xl font-bold md:text-5xl">{t("title")}</h2>
            {/* <p className="max-w-lg text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p> */}
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">01</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                {t("furniture.title")}
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              {t("furniture.description")}
            </p>
            <img
              src={furnitureLogo.src}
              alt="Furniture and Carpets Department"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">02</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                {t("medical.title")}
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              {t("medical.description")}
            </p>
            <img
              src={medicalLogo.src}
              alt=" Medical Department."
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">03</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                {t("contracting.title")}
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              {t("contracting.description")}
            </p>
            <img
              src={steelLogo.src}
              alt="Contracting and Maintenance Department"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">04</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                {t("steamatic.title")}
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              {t("steamatic.description")}
            </p>
            <img
              src={steamaticLogo.src}
              alt=" Al Mira Steamatic"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
          {/* <!-- Item --> */}
          <div className="relative flex cursor-pointer flex-col gap-4 p-5 [border-top:1px_solid_rgb(0,_0,_0)] sm:px-6 md:py-10 lg:flex-row lg:gap-24">
            <div className="flex items-center gap-4  lg:w-1/3 lg:gap-12">
              <p className="p-2.5 text-sm sm:text-sm">05</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                {t("optics.title")}
              </h3>
            </div>
            <p className="max-w-md text-sm sm:text-base">
              {t("optics.description")}
            </p>
            <img
              src={opticsLogo.src}
              alt="Al Mira Optical Company Limited"
              className=" h-32 w-32    sm:h-40  sm:min-w-[48px] md:w-40 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
