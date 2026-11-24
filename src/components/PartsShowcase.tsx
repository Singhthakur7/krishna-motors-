import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Droplets,
  Wind,
  Disc,
  Cog,
  Zap,
  Wrench,
  ArrowRight,
  Check,
} from 'lucide-react';
import {
  PART_CATEGORIES,
  buildWhatsAppUrl,
  type PartCategoryItem,
  type PartFilterCategory,
} from '../data/krishnaMotors';

const FILTER_TABS: { id: PartFilterCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'car', label: 'Car Parts' },
  { id: 'bike', label: 'Bike Parts' },
  { id: 'lubricants', label: 'Lubricants & Oils' },
];

function CategoryIcon({ iconKey }: { iconKey: PartCategoryItem['iconKey'] }) {
  switch (iconKey) {
    case 'droplets':
      return <Droplets className="h-5 w-5" aria-hidden="true" />;
    case 'wind':
      return <Wind className="h-5 w-5" aria-hidden="true" />;
    case 'disc':
      return <Disc className="h-5 w-5" aria-hidden="true" />;
    case 'cog':
      return <Cog className="h-5 w-5" aria-hidden="true" />;
    case 'zap':
      return <Zap className="h-5 w-5" aria-hidden="true" />;
    case 'wrench':
      return <Wrench className="h-5 w-5" aria-hidden="true" />;
  }
}

export function PartsShowcase() {
  const [activeFilter, setActiveFilter] = useState<PartFilterCategory>('all');

  const filteredItems =
    activeFilter === 'all'
      ? PART_CATEGORIES
      : PART_CATEGORIES.filter((item) => item.categories.includes(activeFilter));

  return (
    <section
      id="parts"
      aria-labelledby="parts-showcase-heading"
      className="relative border-t border-white/8 bg-[#0C0C10] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle Background Accent Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-[#E11D2E]/8 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Filter Bar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-[#E11D2E] uppercase">
              What We Deal In
            </p>
            <h2
              id="parts-showcase-heading"
              className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
            >
              Genuine Parts &amp; Premium Lubricants
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Browse our core automotive categories stocked at our Bhadson Road
              showroom. Tap any category to verify exact vehicle fitment and
              availability directly on WhatsApp.
            </p>
          </motion.div>

          {/* Segmented Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter spare parts and lubricants"
            className="inline-flex w-full flex-wrap gap-1.5 rounded-xl border border-white/10 bg-[#121216] p-1.5 sm:w-auto sm:flex-nowrap"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex-1 rounded-lg px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap sm:flex-initial sm:px-4 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] ${
                    isActive
                      ? 'bg-[#E11D2E] text-white shadow-[0_0_20px_rgba(225,29,46,0.4)]'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Informational Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const categoryLabel = item.categories
              .map((cat) =>
                cat === 'car'
                  ? 'Car'
                  : cat === 'bike'
                    ? 'Bike'
                    : 'Lubricants'
              )
              .join(' · ');

            const inquiryUrl = buildWhatsAppUrl(
              `Hello Krishna Motors, I would like to check availability for ${item.title}.`
            );

            return (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121216]/95 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#E11D2E]/50 hover:shadow-[0_14px_40px_rgba(225,29,46,0.14)]"
              >
                {/* Hover Crimson Top Hairline */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#E11D2E]/80 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />

                <div>
                  {/* Icon + Quiet Unboxed Applicability Metadata */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-[#E11D2E] transition-colors duration-200 group-hover:border-[#E11D2E]/40 group-hover:bg-[#E11D2E]/15">
                      <CategoryIcon iconKey={item.iconKey} />
                    </div>
                    <span className="text-xs font-medium tracking-wide text-zinc-400">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display mt-5 text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
                    {item.subtitle}
                  </p>

                  {/* Short Bullet Specs */}
                  <ul className="mt-5 space-y-2.5 border-t border-white/8 pt-4">
                    {item.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2.5 text-sm leading-snug text-zinc-300"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#E11D2E]"
                          aria-hidden="true"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Availability Link (No Prices / No Cart) */}
                <div className="mt-6 border-t border-white/8 pt-4">
                  <a
                    href={inquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors duration-200 hover:text-emerald-300 focus-visible:outline-none focus-visible:underline"
                  >
                    <span>Check Availability on WhatsApp</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
