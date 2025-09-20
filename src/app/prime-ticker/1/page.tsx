'use client';

import Timer from '@/component/timer';
import { MouseEventHandler, useSyncExternalStore } from 'react';
import { getPrimeTicker } from '@/lib/get-prime-ticker';
import { Field } from '@/lib/prime-ticker';

const primeTicker = getPrimeTicker();
primeTicker.start();

const subscribe = (field: string) => (callback: () => void) => {
  primeTicker.addEventListener(`update:${field}`, callback);
  return () => primeTicker.removeEventListener('update:a', callback);
};

const getSnapshot = (field: Field) => () => {
  return primeTicker.get(field);
};

const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
  primeTicker.set(e.currentTarget.id as Field, 0);
};

export default function PrimeTickerPage() {
  const a = useSyncExternalStore(subscribe('a'), getSnapshot('a'));
  const b = useSyncExternalStore(subscribe('b'), getSnapshot('b'));
  const c = useSyncExternalStore(subscribe('c'), getSnapshot('c'));
  const d = useSyncExternalStore(subscribe('d'), getSnapshot('d'));
  const e = useSyncExternalStore(subscribe('e'), getSnapshot('e'));

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">PrimeTicker</h1>
        <h2 className="mt-4 text-lg font-semibold whitespace-pre-wrap">useSyncExternalStore를 사용하여 구현</h2>
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
          각각의 필드는 2초, 3초, 5초, 7초, 11초마다 1씩 증가합니다.{'\n'} * 콘솔에서 변화를 확인해보세요.
        </div>
      </div>
    </div>
  );
}
