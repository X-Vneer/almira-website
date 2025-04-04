import { banner } from "@/assets"
import MarqueeSection from "./_components/marquee"
import { About } from "./_components/about"

const Page = () => {
  return (
    <>
      <MarqueeSection />
      <div className="h-[50vh] ">
        <img
          src={banner.src}
          className="w-full h-full object-cover"
          alt="banner"
        />
      </div>
      <About />
    </>
  )
}

export default Page
