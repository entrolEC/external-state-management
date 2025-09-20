import { createStore } from 'zustand/vanilla';
import { getPrimeTicker } from '@/lib/get-prime-ticker';
import { Field } from '@/lib/prime-ticker';

export type PrimeTickerState = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  setField: (f: Field, n: number) => void;
};

export const primeTickerStore = createStore<PrimeTickerState>()((set) => ({
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  setField: (f: Field, n: number) => set({ [f]: n }),
}));

const handleTicker = (field: Field) => () => {
  const primeTicker = getPrimeTicker();
  primeTickerStore.getState().setField(field, primeTicker.get(field));
};

if (typeof window !== 'undefined') {
  const primeTicker = getPrimeTicker();
  primeTicker.addEventListener(`update:a`, handleTicker('a'));
  primeTicker.addEventListener(`update:b`, handleTicker('b'));
  primeTicker.addEventListener(`update:c`, handleTicker('c'));
  primeTicker.addEventListener(`update:d`, handleTicker('d'));
  primeTicker.addEventListener(`update:e`, handleTicker('e'));
}
