import { useEffect, useState } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id); // 언마운트 시 정리
  }, []);

  return <span>{seconds}</span>; // 텍스트만 표시
}
