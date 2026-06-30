import { Injectable, signal, Signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly signals = new Map<
    string,
    ReturnType<typeof signal<unknown>>
  >();

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.getSignal<T>(key).set(value);
  }

  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  select<T>(key: string): Signal<T | null> {
    return this.getSignal<T>(key).asReadonly();
  }

  remove(key: string): void {
    localStorage.removeItem(key);
    this.getSignal(key).set(null);
  }

  clear(): void {
    localStorage.clear();
    this.signals.forEach((sig) => sig.set(null));
  }

  private getSignal<T>(key: string): ReturnType<typeof signal<T | null>> {
    if (!this.signals.has(key)) {
      this.signals.set(key, signal<T | null>(this.get<T>(key)));
    }
    return this.signals.get(key) as ReturnType<typeof signal<T | null>>;
  }
}
