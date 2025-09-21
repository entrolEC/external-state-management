'use client'
import dynamic from "next/dynamic";

const Example4 = dynamic(() => import('@/app/example/4/example4'), { ssr: false })

export default function Page() {
  return <Example4/>
}
