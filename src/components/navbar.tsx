import { SignOutButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { Button, buttonVariants } from "./ui/button"

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-brand-700">Pingster</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Sign out
                  </Button>
                </SignOutButton>

                <Button
                  variant="expandIcon"
                  Icon={() => <ArrowRight className="h-4 w-4" />}
                  iconPlacement="right"
                  className="group flex items-center gap-1.5"
                  asChild
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign in
                </Link>

                <div className="h-8 w-px bg-gray-200" />

                <Button
                  variant="expandIcon"
                  Icon={() => <ArrowRight className="h-4 w-4" />}
                  iconPlacement="right"
                  className="group flex items-center gap-1.5"
                  asChild
                >
                  <Link href="/sign-up">Sign up</Link>
                </Button>

              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
