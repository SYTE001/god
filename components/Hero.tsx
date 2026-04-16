'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto flex min-h-[74vh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6"
      >
        <p className="mb-5 inline-flex w-fit rounded-full border border-indigo-300/20 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200">
          Modern Product Discovery
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl">
          Find curated products from your favorite short-form videos in seconds.
        </h1>
        <p className="mt-6 max-w-xl text-sm text-slate-300 sm:text-lg">
          Novaa connects your TikTok folder code directly to live catalog data from Google Sheets — fast, clean, and mobile-first.
        </p>
        <div className="mt-8">
          <a
            href="#products"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            Explore Products
          </a>
        </div>
      </motion.div>
    </section>
  );
}
