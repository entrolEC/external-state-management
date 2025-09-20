import PrimeTicker from '@/lib/prime-ticker';

let inst: PrimeTicker | null = null;

export function getPrimeTicker(): PrimeTicker {
  if (typeof window === 'undefined') {
    throw new Error('PrimeTicker is client-only. Call this in a client component after mount.');
  }
  if (!inst) inst = new PrimeTicker();
  return inst;
}
