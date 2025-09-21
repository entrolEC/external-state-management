'use client'
import dynamic from "next/dynamic";

const PrimeTicker2 = dynamic(() => import('@/app/prime-ticker/2/prime-ticker2'), { ssr: false })

export default function Page() {
  return <PrimeTicker2/>
}
