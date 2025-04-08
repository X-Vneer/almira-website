import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { Cairo, Rubik } from "next/font/google"
import { headers } from "next/headers"
import { notFound } from "next/navigation"
import ColorThemeSwitch from "./_components/color-theme-switch"
import { Footer } from "./_components/footer"
import { Header } from "./_components/header"
import "./globals.css"
import { whatsapp } from "@/assets"

export const metadata: Metadata = {
  title: { template: "Almira Group | %s", default: "Almira group" },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const arFont = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
})
const enFont = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  const headersList = await headers()
  const referer = headersList.get("referer")
  const pathname = (referer ? new URL(referer).pathname : "/") || "/"
  let color = "#006144"
  if (pathname.includes("/furniture")) color = "#AB8542"
  if (pathname.includes("/medical")) color = "#6EB04A"
  if (pathname.includes("/contracting")) color = "#EC7E00"
  if (pathname.includes("/steamatic")) color = "#00367E"
  if (pathname.includes("/optics")) color = "#8E0104"

  return (
    <html
      dir={locale == "ar" ? "rtl" : "ltr"}
      lang={locale}
      className={locale === "ar" ? arFont.className : enFont.className}
      style={{
        // @ts-ignore
        "--primary-color-root": color,
      }}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}

          <Footer />
          <a
            href="https://wa.me/+966502177179"
            className="whatsapp-icon fixed bottom-4 left-4 z-50"
            data-uw-rm-brl="PR"
            data-uw-original-href="https://wa.me/+966502177179"
          >
            <img
              src={whatsapp.src}
              alt="WhatsApp Logo"
              className="w-15 h-15"
              data-uw-rm-alt-original="WhatsApp Logo"
              data-uw-rm-alt="ALT"
            />
          </a>
          <ColorThemeSwitch />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
