import React from "react"
import { Companies } from "./_components/companies"
import { Hero } from "./_components/hero"

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <Hero />
      <Companies />
    </>
  )
}

export default Page
