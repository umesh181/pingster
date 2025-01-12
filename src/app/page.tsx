import { Heading } from "./components/heading"
import { MaxWidthWrapper } from "./components/max-width-wrapper"
import { BlurFade } from "./components/ui/blue-fade"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <BlurFade delay={0.25} inView>
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
