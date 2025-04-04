import { gate } from "@/assets"
import { useTranslations } from "next-intl"
import React from "react"

type Props = {}

const Gate = (props: Props) => {
  const t = useTranslations()
  return (
    <div className="w-full h-[50vh]  lg:h-[80vh] relative">
      <img src={gate.src} className="w-full h-full object-cover" alt="alt" />
      <div className="flex items-center text-white justify-center absolute inset-0 bg-primary/5">
        <p className="text-4xl px-5 font-bold lg:text-7xl">{t("gate.title")}</p>
      </div>
    </div>
  )
}

export default Gate
