// primeTicker.ts
export type Field = 'a' | 'b' | 'c' | 'd' | 'e';
export type State = Record<Field, number>;

/**
 * 2s/3s/5s/7s/11s 주기로 자동 증가하며
 * 값 변경 시 `update:<field>` 와 `update` 이벤트를 발생시키는 외부 상태 객체
 * - 외부에서 primeTicker.set("a", 100) 으로 수정 가능
 * - 외부에서 primeTicker.addEventListener("update:a", handler) 로 이벤트 리스닝 가능
 */
class PrimeTicker extends EventTarget {
  private state: State = { a: 0, b: 0, c: 0, d: 0, e: 0 };
  private timers: Partial<Record<Field, ReturnType<typeof setInterval>>> = {};
  private readonly intervals: Record<Field, number> = {
    a: 2000,  // 2초
    b: 3000,  // 3초
    c: 5000,  // 5초
    d: 7000,  // 7초
    e: 11000, // 11초
  };

  /** 자동 증가 시작 */
  start() {
    (Object.keys(this.intervals) as Field[]).forEach((field) => {
      if (this.timers[field]) return;
      this.timers[field] = setInterval(() => this.bump(field), this.intervals[field]);
    });
  }

  /** 자동 증가 정지 */
  stop() {
    (Object.keys(this.timers) as Field[]).forEach((field) => {
      if (this.timers[field]) clearInterval(this.timers[field]!);
      this.timers[field] = undefined;
    });
  }

  /** 상태 스냅샷 */
  getSnapshot(): State {
    console.log('PrimeTicker: ', this.state);
    return { ...this.state };
  }

  /** 개별 값 읽기 */
  get(field: Field): number {
    return this.state[field];
  }

  /** 외부 수정 */
  set(field: Field, value: number) {
    this.state[field] = value;
    this.emit(field);
  }

  /** 내부 증가 */
  private bump(field: Field) {
    this.state[field] += 1;
    this.emit(field);
  }

  /** 이벤트 발생 */
  private emit(field: Field) {
    const detail = { field, value: this.state[field], snapshot: this.getSnapshot() };
    this.dispatchEvent(new CustomEvent(`update:${field}`, { detail }));
  }
}

export default PrimeTicker;

/*
사용 예시:

import primeTicker from './primeTicker';

// 자동 증가 시작
primeTicker.start();

// 외부에서 값 수정
primeTicker.set('a', 100);

// 이벤트 리스너 등록
primeTicker.addEventListener('update:a', (e) => {
  const { field, value } = (e as CustomEvent).detail;
  console.log(`field ${field} updated to ${value}`);
});
*/
