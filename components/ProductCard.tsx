'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className="glass group overflow-hidden rounded-2xl p-3 shadow-lg shadow-black/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900/80">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">Image unavailable</div>
        )}
      </div>
      <div className="space-y-2 px-1 pb-1 pt-4">
        <h3 className="text-base font-semibold text-white">{product.title}</h3>
        <p className="text-sm text-muted">{product.description}</p>
        {product.link ? (
          <a
            href={product.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm text-sky-300 transition-colors hover:text-sky-200"
          >
            View product →
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
