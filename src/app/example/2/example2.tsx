'use client';
import { useEffect, useRef } from 'react';

export default function Example2() {
  const widthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (widthRef.current) {
        widthRef.current.innerText = `width: ${window.innerWidth}`;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Example2</h1>
        <h2 className="mt-4 text-lg font-semibold">useRef를 사용하여 구현</h2>
        <div ref={widthRef} className="mt-20 rounded-md bg-yellow-200 px-4 py-2 font-medium">
          {typeof window !== 'undefined' && `width: ${window.innerWidth}`}
        </div>
        <div className="mt-4 text-xs text-gray-800">* 윈도우의 크기를 조절하여 변화를 확인해보세요.</div>
      </div>
    </div>
  );
}
