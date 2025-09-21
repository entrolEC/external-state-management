'use client'
import dynamic from "next/dynamic";

const PrimeTicker1 = dynamic(() => import('@/app/prime-ticker/1/prime-ticker1'), { ssr: false })

export default function Page() {
  return <PrimeTicker1/>
}
