import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Products } from '@/components/Products';
import { Section } from '@/components/Section';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section
        id="products"
        title="Featured Products"
        description="Live data from Google Sheets, presented in a responsive and touch-friendly layout."
      >
        <Products />
      </Section>

      <Section
        id="about"
        title="About Novaa"
        description="Novaa helps viewers instantly discover products featured in social content. Using a folder code, users can access updated recommendations synced from your existing Apps Script pipeline."
      >
        <div className="glass rounded-2xl p-6 text-sm leading-relaxed text-slate-300 sm:text-base">
          Built for speed and clarity, this interface focuses on smooth navigation, lightweight interactions, and a premium visual style that performs well on mid-to-low mobile devices.
        </div>
      </Section>

      <Section id="contact" title="Let’s Collaborate" description="Need a custom folder, creator page, or integration support?">
        <div className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Reach out to discuss partnerships, product submissions, or creator-specific storefront setups.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@novaa.app"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2.5 text-sm font-medium text-white"
            >
              Email Us
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm text-slate-200">
              Instagram
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
