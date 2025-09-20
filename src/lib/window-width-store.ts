import { createStore } from 'zustand/vanilla';

export type WindowState = {
  width: number;
  setWidth: (w: number) => void;
};

export const windowStore = createStore<WindowState>()((set) => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  setWidth: (w) => set({ width: w }),
}));

if (typeof window !== 'undefined') {
  const handler = () => {
    windowStore.getState().setWidth(window.innerWidth);
  };
  handler();
  window.addEventListener('resize', handler);
}
