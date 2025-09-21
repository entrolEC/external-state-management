'use client'
import dynamic from "next/dynamic";

const Example1 = dynamic(() => import('@/app/example/1/example1'), { ssr: false })

export default function Page() {
  return <Example1/>
}
