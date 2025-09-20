'use client';

import { useEffect, useState } from 'react';

export default function Example1() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Example1</h1>
        <h2 className="mt-4 text-lg font-semibold">useState와 useEffect를 사용하여 구현</h2>
        <div className="mt-8 rounded-md bg-blue-200 px-4 py-2 font-medium">width: {width}</div>
      </div>
    </div>
  );
}
