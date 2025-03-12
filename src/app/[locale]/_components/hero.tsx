"use client"

import { hero0, hero1, hero2, hero3, hero4, hero5 } from "@/assets"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/cn"
import { useInViewport } from "@mantine/hooks"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { StaticImageData } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useCallback } from "react"

const Slide = ({ src, index }: { src: StaticImageData; index: number }) => {
  const { ref, inViewport } = useInViewport()
  return (
    <div
      ref={ref}
      className={cn(
        "embla__slide relative mx-2 min-w-0 flex-[0_0_100%] cursor-grab select-none overflow-hidden delay-500 duration-500 min-h-svh",
        inViewport ? "blur-0" : "blur-md"
      )}
    >
      <Image
        loading={index !== 0 ? undefined : "lazy"}
        className="h-full w-full object-cover"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        src={src}
        alt="background slider"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}
export function Hero() {
  const { locale } = useParams() as { locale: string }
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: locale === "ar" ? "rtl" : "ltr" },
    [Autoplay({ delay: 8000 })]
  )
  const sliderImages = [hero0, hero1, hero2, hero3, hero4, hero5]

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const t = useTranslations("home")

  return (
    <div className="relative h-full min-h-svh text-white overflow-hidden">
      <div className="min-h-svh inset-0">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {sliderImages.map((data, i) => {
              return <Slide src={data} key={i} index={i} />
            })}
          </div>
        </div>
      </div>

      <div className=" w-full max-w-2xl px-4 absolute top-1/2 left-1/2 -translate-[50%] z-[1] flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold leading-tight mb-4 select-none">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl select-none">
          {t("description")}
        </p>
        <Link
          href="/about-us"
          className="select-none rounded-md bg-primary px-6 py-3 text-center font-semibold text-white"
        >
          {t("learn-more")}
        </Link>
      </div>
      <div className="absolute bottom-10 md:right-5 lg:right-10 flex rtl:flex-row-reverse gap-2 flex-nowrap">
        <button
          className="size-10 flex items-center justify-center bg-white/35 rounded-full cursor-pointer embla__prev"
          onClick={scrollPrev}
        >
          <ChevronLeft />
        </button>
        <button
          className="size-10 flex items-center justify-center bg-white/35 rounded-full cursor-pointer embla__next"
          onClick={scrollNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
