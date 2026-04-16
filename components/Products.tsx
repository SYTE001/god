'use client';

import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '@/lib/api';
import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/types';

type State =
  | { status: 'loading'; data: Product[]; error: string }
  | { status: 'ready'; data: Product[]; error: string }
  | { status: 'error'; data: Product[]; error: string };

const skeletonItems = Array.from({ length: 6 }, (_, i) => `skeleton-${i}`);

export function Products() {
  const [state, setState] = useState<State>({ status: 'loading', data: [], error: '' });

  useEffect(() => {
    const controller = new AbortController();

    getProducts(controller.signal)
      .then((products) => {
        setState({ status: 'ready', data: products, error: '' });
      })
      .catch((error: unknown) => {
        if ((error as { name?: string }).name === 'AbortError') {
          return;
        }

        setState({ status: 'error', data: [], error: 'Unable to load products right now. Please try again shortly.' });
      });

    return () => controller.abort();
  }, []);

  const content = useMemo(() => {
    if (state.status === 'loading') {
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skeletonItems.map((item) => (
            <div key={item} className="glass animate-pulse rounded-2xl p-3">
              <div className="aspect-[16/10] rounded-xl bg-white/10" />
              <div className="mt-4 h-4 w-2/3 rounded bg-white/10" />
              <div className="mt-2 h-3 w-full rounded bg-white/10" />
              <div className="mt-2 h-3 w-4/5 rounded bg-white/10" />
            </div>
          ))}
        </div>
      );
    }

    if (state.status === 'error') {
      return <p className="glass rounded-2xl p-5 text-sm text-rose-200">{state.error}</p>;
    }

    if (!state.data.length) {
      return <p className="glass rounded-2xl p-5 text-sm text-slate-300">No products found yet.</p>;
    }

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {state.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }, [state]);

  return content;
}
