import { motion } from 'motion/react';
import { ShieldCheck, Layers, Award, Headphones } from 'lucide-react';
import { TRUST_PILLARS, type TrustPillar } from '../data/krishnaMotors';

function PillarIcon({ iconKey }: { iconKey: TrustPillar['iconKey'] }) {
  switch (iconKey) {
    case 'shield':
      return <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />;
    case 'layers':
      return <Layers className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />;
    case 'award':
      return <Award className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />;
    case 'headset':
      return <Headphones className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />;
  }
}

export function TrustPillars() {
  return (
    <section
      aria-labelledby="why-krishna-heading"
      className="relative bg-[#09090B] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#E11D2E] uppercase">
            Why Krishna Motors
          </p>
          <h2
            id="why-krishna-heading"
            className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
          >
            Built on Authenticity &amp; Precision Since 2007
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Four uncompromising standards trusted by Patiala car owners, riders,
            and professional mechanics for nearly two decades.
          </p>
        </motion.div>

        {/* 4-Column High-Contrast Bento Grid (2x2 on Mobile) */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {TRUST_PILLARS.map((pillar, idx) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121216]/90 p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#E11D2E]/50 hover:shadow-[0_12px_36px_rgba(225,29,46,0.14)] sm:p-6"
            >
              {/* Subtle Top Crimson Hover Illumination */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E11D2E]/60 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />

              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E11D2E]/35 bg-[#E11D2E]/12 text-[#E11D2E] shadow-[0_0_20px_rgba(225,29,46,0.2)] transition-colors duration-200 group-hover:bg-[#E11D2E] group-hover:text-white sm:h-12 sm:w-12">
                    <PillarIcon iconKey={pillar.iconKey} />
                  </div>
                  <span className="font-display text-sm font-bold tracking-wider text-zinc-600 tabular-nums transition-colors duration-200 group-hover:text-zinc-400">
                    {pillar.index}
                  </span>
                </div>

                <h3 className="font-display mt-5 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
