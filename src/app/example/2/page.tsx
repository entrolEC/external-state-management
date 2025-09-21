'use client'
import dynamic from "next/dynamic";

const Example2 = dynamic(() => import('@/app/example/2/example2'), { ssr: false })

export default function Page() {
  return <Example2/>
}
