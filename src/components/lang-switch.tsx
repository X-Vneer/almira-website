// components/LanguageSwitcher.tsx

"use client"

import { useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"

const LanguageSwitcher = () => {
  const pathname = usePathname()
  const router = useRouter()
  const locales = ["en", "ar"]
  const currentLocale = pathname.split("/")[1]

  const changeLanguage = useCallback(
    (newLocale: string) => {
      const searchParams = window.location.search
      const newPath = `/${newLocale}${pathname.substring(
        currentLocale.length + 1
      )}${searchParams}`
      router.push(newPath)
    },
    [router, pathname, currentLocale]
  )

  return (
    <>
      {locales.map((loc) => {
        if (loc === currentLocale) return null
        return (
          <button
            className=" cursor-pointer  bg-gray-50 hover:bg-gray-100 duration-150  p-2 rounded"
            key={loc}
            onClick={() => changeLanguage(loc)}
            disabled={loc === currentLocale}
          >
            {loc.toUpperCase()}
          </button>
        )
      })}
    </>
  )
}

export default LanguageSwitcher
