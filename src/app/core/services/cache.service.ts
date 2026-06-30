import { DestroyRef, inject, Injectable } from '@angular/core';

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

const TTL_MS = 10 * 60 * 1000;
const CLEANUP_INTERVAL_MS = 60 * 1000;

@Injectable({ providedIn: 'root' })
export class CacheService {
  private readonly cache = new Map<string, CacheEntry<unknown>>();
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const timer = setInterval(() => this.evictExpired(), CLEANUP_INTERVAL_MS);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return entry.data;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, { data, expiresAt: Date.now() + TTL_MS });
  }

  private evictExpired(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
      }
    }
  }
}
