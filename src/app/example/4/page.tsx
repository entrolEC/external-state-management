'use client';
import { windowStore } from '@/lib/window-width-store';
import { useStore } from 'zustand/react';

export default function Example3() {
  const width = useStore(windowStore, (s) => s.width); // selector로 조각만 구독

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Example4</h1>
        <h2 className="mt-4 text-lg font-semibold">zustand vanila store를 사용하여 구현</h2>
        <div className="mt-20 rounded-md bg-purple-200 px-4 py-2 font-medium">width: {width}</div>
        <div className="mt-4 text-xs text-gray-800">* 윈도우의 크기를 조절하여 변화를 확인해보세요.</div>
      </div>
    </div>
  );
}
