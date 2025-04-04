"use client"
import React from "react"
import Marquee from "react-fast-marquee"
import {
  glass1,
  glass2,
  glass3,
  glass4,
  glass5,
  glass6,
  glass7,
  noise1,
  noise2,
} from "@/assets"

const elements = [glass1, glass2, glass3, glass4, glass5, glass6, glass7]
const MarqueeSection = () => (
  <div>
    <div className="flex  max-md:hidden justify-between gap-10">
      <img alt="noise" src={noise1.src} />
      <img alt="noise" src={noise2.src} />
    </div>

    <Marquee>
      {elements.map((e) => {
        return (
          <div className=" w-[280px] aspect-square">
            <img
              src={e.src}
              alt="glass"
              className="w-full h-full object-contain px-2"
            />
          </div>
        )
      })}
    </Marquee>
  </div>
)

export default MarqueeSection
