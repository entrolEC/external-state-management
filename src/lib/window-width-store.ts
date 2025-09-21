import { createStore } from 'zustand/vanilla';

type WindowState = { width: number };

export const windowStore = createStore<WindowState>(() => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
}));

// 클라이언트 환경일 때만 전역적으로 리스너 등록
if (typeof window !== 'undefined') {
  const handler = () => {
    windowStore.setState({ width: window.innerWidth });
  };
  window.addEventListener('resize', handler);
  // 초기 동기화
  handler();
}