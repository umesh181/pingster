import { Check } from "lucide-react"
import { Heading } from "./components/heading"
import { MaxWidthWrapper } from "./components/max-width-wrapper"
import { ShinyButton } from "./components/shiny-button"
import { BlurFade } from "./components/ui/blue-fade"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <BlurFade delay={0.25}>
              <Heading>
                <span>Instant SaaS Updates,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Right in Your Discord.
                </span>
              </Heading>
              <br />

              <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
                PingPanda is the easiest way to monitor your SaaS. Get instant
                notifications for{" "}
                <span className="font-semibold text-gray-700">
                  sales, new users, or any other event
                </span>{" "}
                sent directly to your Discord.
              </p>
              <br />
              <div className="flex flex-col items-center gap-4">
                <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-left">
                  {[
                    "Real-time Discord alerts for critical events",
                    "Buy once, use forever",
                    "Track sales, new users, or any other event",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-1.5 items-center text-left">
                      <Check className="size-5 shrink-0 text-brand-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </BlurFade>
              <BlurFade delay={0.45}>
              <div className="w-full max-w-80 flex" >
                <ShinyButton href="/sign-up" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  Start For Free Today
                </ShinyButton>
              </div>
              </BlurFade>
              




            
            <br />


          </div>

        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
