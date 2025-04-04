"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const ColorThemeSwitch = () => {
  const pathname = usePathname()

  useEffect(() => {
    let color = "#006144"
    if (pathname.includes("/furniture")) color = "#AB8542"
    if (pathname.includes("/medical")) color = "#6EB04A"
    if (pathname.includes("/contracting")) color = "#EC7E00"
    if (pathname.includes("/steamatic")) color = "#00367E"
    if (pathname.includes("/optics")) color = "#8E0104"

    document.documentElement.style.setProperty("--primary-color-root", color)
  }, [pathname])

  return null
}

export default ColorThemeSwitch
