// windowWidthStore.ts
import { createStore } from 'zustand/vanilla';

export type WindowState = {
  width: number;
  setWidth: (w: number) => void;
};

export const windowStore = createStore<WindowState>()((set) => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  setWidth: (w) => set({ width: w }),
}));

// 전역 1회 이벤트 구독
if (typeof window !== 'undefined') {
  const handler = () => {
    windowStore.getState().setWidth(window.innerWidth);
  };
  handler();
  window.addEventListener('resize', handler);
  // 필요 시 정리 함수 보관 후 언마운트 시 해제 로직 추가 가능
}
