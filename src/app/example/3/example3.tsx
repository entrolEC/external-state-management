'use client';
import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return window.innerWidth;
}

export default function Example3() {
  const width = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Example3</h1>
        <h2 className="mt-4 text-lg font-semibold">useSyncExternalStore를 사용하여 구현</h2>
        <div className="mt-20 rounded-md bg-green-200 px-4 py-2 font-medium">width: {width}</div>
        <div className="mt-4 text-xs text-gray-800">* 윈도우의 크기를 조절하여 변화를 확인해보세요.</div>
      </div>
    </div>
  );
}
