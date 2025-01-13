"use client"

import { SignUp } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

const Page = () => {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent")

  return (
    <div className="pt-7 w-full flex-1 flex items-center justify-center">
      <SignUp
        forceRedirectUrl={intent ? `/dashboard?intent=${intent}` : "/dashboard"}
      />
    </div>
  )
}

export default Page
