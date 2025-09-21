'use client';

import Timer from '@/component/timer';
import { MouseEventHandler } from 'react';
import { getPrimeTicker } from '@/lib/get-prime-ticker';
import { Field } from '@/lib/prime-ticker';
import { useStore } from 'zustand/react';
import { primeTickerStore } from '@/lib/prime-ticker-store';

const primeTicker = getPrimeTicker();
primeTicker.start();

const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
  primeTicker.set(e.currentTarget.id as Field, 0);
};

export default function PrimeTickerPage() {
  const a = useStore(primeTickerStore, (s) => s.a);
  const b = useStore(primeTickerStore, (s) => s.b);
  const c = useStore(primeTickerStore, (s) => s.c);
  const d = useStore(primeTickerStore, (s) => s.d);
  const e = useStore(primeTickerStore, (s) => s.e);

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">PrimeTicker</h1>
        <h2 className="mt-4 text-lg font-semibold whitespace-pre-wrap">zustand vanila store를 사용하여 구현</h2>
        <h2 className="mt-4 text-lg font-semibold">
          Time: <Timer />
        </h2>
        <div className="flex gap-2">
          <div
            id="a"
            onClick={handleClick}
            className="mt-20 cursor-pointer rounded-md bg-red-200 px-4 py-2 font-medium hover:opacity-70"
          >
            a:{a}
          </div>
          <div
            id="b"
            onClick={handleClick}
            className="mt-20 cursor-pointer rounded-md bg-yellow-200 px-4 py-2 font-medium hover:opacity-70"
          >
            b:{b}
          </div>
          <div
            id="c"
            onClick={handleClick}
            className="mt-20 cursor-pointer rounded-md bg-green-200 px-4 py-2 font-medium hover:opacity-70"
          >
            c:{c}
          </div>
          <div
            id="d"
            onClick={handleClick}
            className="mt-20 cursor-pointer rounded-md bg-blue-200 px-4 py-2 font-medium hover:opacity-70"
          >
            d:{d}
          </div>
          <div
            id="e"
            onClick={handleClick}
            className="mt-20 cursor-pointer rounded-md bg-purple-200 px-4 py-2 font-medium hover:opacity-70"
          >
            e:{e}
          </div>
        </div>
        <div className="mt-4 text-xs whitespace-pre-wrap text-gray-800">
          각각의 필드는 2초, 3초, 5초, 7초, 11초마다 1씩 증가합니다.
        </div>
      </div>
    </div>
  );
}
