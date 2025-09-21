'use client'
import dynamic from "next/dynamic";

const Example3 = dynamic(() => import('@/app/example/3/example3'), { ssr: false })

export default function Page() {
  return <Example3/>
}
