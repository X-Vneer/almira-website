"use client"
import { logo } from "@/assets"
import LanguageSwitcher from "@/components/lang-switch"
import { navItems } from "@/content/site"
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/cn"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import * as Accordion from "@radix-ui/react-accordion"

export function Header() {
  const t = useTranslations("header")
  const pathName = usePathname()

  // toggle state
  const [isOpened, setIsOpened] = useState(false)
  const toggle = () => {
    setIsOpened((pre) => !pre)
  }

  useEffect(() => {
    const body = document.body
    body.style.cssText = isOpened
      ? "position:fixed; top:0;"
      : " position:relative;"
  }, [isOpened])
  return (
    <header className=" lg:absolute z-50 lg:top-5 left-0 right-0">
      <nav className=" z-10 mx-auto h-auto w-full max-w-screen-lg md:relative md:top-0 bg-white lg:rounded-2xl">
        <div className="flex px-6  flex-row md:items-center justify-between  py-3 ">
          <Link href="/">
            <img alt="logo" src={logo.src} className="h-10 lg:h-12" />
          </Link>
          <div className="hidden mt-14  flex-col space-y-8 md:mt-0 gap-2 lg:flex lg:flex-row lg:space-y-0">
            {navItems.map((element) => {
              if (element.link && typeof element.link === "object") {
                const links = element.link.map((e) => e.link)
                return (
                  <DropdownMenu.Root key={element.label}>
                    <DropdownMenu.Trigger
                      key={element.label}
                      className={cn(
                        "flex rounded-lg px-3 lg:px-6 items-center max-md:justify-between md:gap-3 lg:gap-4 md:py-3 lg:py-4 hover:bg-gray-100 hover:text-primary text-gray-800   ",
                        links.includes(pathName as "/medical") &&
                          "bg-gray-100 text-primary"
                      )}
                    >
                      {t(element.label)} <ChevronDown size={16} />
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white border rounded shadow-md p-2 w-fit z-10 mt-2">
                        {element.link.map((option) => (
                          <DropdownMenu.Item
                            key={option.label}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                          >
                            <Link
                              scroll={false}
                              className="flex grow rounded-lg px-5 items-center gap-5 py-5 xl:px-8"
                              href={option.link}
                            >
                              {/* ICON */}
                              <div className="relative">
                                <img
                                  src={option.src}
                                  className="h-10"
                                  alt={t(option.label)}
                                />
                              </div>
                              {/* TEXT */}
                              <div>
                                <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                                  {t(option.label)}
                                </h2>
                                <p className="font-inter max-w-64 text-sm text-gray-500 md:max-w-sm">
                                  {t(`${option.label}-description`)}
                                </p>
                              </div>
                            </Link>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                )
              }

              return (
                <Link
                  // prefetch="hover"
                  href={element.link}
                  key={element.label}
                  className={cn(
                    "font-inter rounded-lg px-3 lg:px-6 py-4 hover:bg-gray-100 hover:text-primary",
                    pathName === element.link && "bg-gray-100 text-primary"
                  )}
                >
                  {t(element.label)}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center  gap-3 ">
            <button
              onClick={toggle}
              className=" lg:hidden cursor-pointer  bg-gray-50 hover:bg-gray-100 duration-150  p-2 rounded"
            >
              {isOpened ? <X /> : <Menu />}
            </button>
            <LanguageSwitcher />
          </div>
        </div>

        <div
          onClick={() => setIsOpened(false)}
          className={cn(
            "absolute top-16 z-10 bg-white w-full   duration-300  lg:h-0 overflow-hidden",
            isOpened ? "h-screen" : " h-0"
          )}
        >
          <div className="w-full px-4 flex flex-col gap-2 py-8 h-[calc(100svh-90px)]  overflow-scroll">
            {navItems.map((element) => {
              if (element.link && typeof element.link === "object") {
                const links = element.link.map((e) => e.link)
                return (
                  <Accordion.Root type="single" collapsible key={element.label}>
                    <Accordion.Item value="1">
                      <Accordion.Header>
                        <Accordion.Trigger
                          onClick={(e) => e.stopPropagation()}
                          key={element.label}
                          className={cn(
                            "flex rounded-lg px-3 lg:px-6 items-center justify-between md:gap-3 lg:gap-4 py-4  hover:bg-gray-100 hover:text-primary text-gray-800  w-full  ",
                            links.includes(pathName as "/medical") &&
                              "bg-gray-100 text-primary"
                          )}
                        >
                          {t(element.label)} <ChevronDown size={16} />
                        </Accordion.Trigger>
                      </Accordion.Header>

                      <Accordion.Content className="bg-white data-[state='open']:animate-[slideDown_300ms_linear]  data-[state='closed']:animate-[slideUp_300ms_linear] overflow-hidden">
                        {element.link.map((option) => (
                          <div
                            key={option.label}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                          >
                            <Link
                              scroll={false}
                              className="flex grow rounded-lg px-5 items-center gap-5 py-5 xl:px-8"
                              href={option.link}
                            >
                              {/* ICON */}
                              <div className="relative">
                                <img
                                  src={option.src}
                                  className="h-10"
                                  alt={t(option.label)}
                                />
                              </div>
                              {/* TEXT */}
                              <div>
                                <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                                  {t(option.label)}
                                </h2>
                                <p className="font-inter max-w-64 text-sm text-gray-500 md:max-w-sm">
                                  {t(`${option.label}-description`)}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </Accordion.Content>
                    </Accordion.Item>
                  </Accordion.Root>
                )
              }

              return (
                <Link
                  // prefetch="hover"
                  href={element.link}
                  key={element.label}
                  className={cn(
                    "font-inter rounded-lg px-3 lg:px-6 py-4 hover:bg-gray-100 hover:text-primary",
                    pathName === element.link && "bg-gray-100 text-primary"
                  )}
                >
                  {t(element.label)}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
