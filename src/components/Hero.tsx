import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { BUSINESS_INFO, DEFAULT_WHATSAPP_URL } from '../data/krishnaMotors';

export function Hero() {
  const [posterError, setPosterError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-carbon-mesh pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Ambient Radial Crimson Showroom Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-crimson-spotlight"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-[#E11D2E]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heritage Statement, Display Title & Direct Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            {/* Metallic Gold Heritage Accent */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="text-xs text-[#D4AF37]" aria-hidden="true">
                ★
              </span>
              <span className="text-[11px] font-semibold tracking-[0.14em] text-[#E6C766] uppercase sm:text-xs">
                Patiala&apos;s Trusted Auto Hub • Since 2007
              </span>
            </div>

            {/* Flagship Display Title */}
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.94] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                KRISHNA
              </span>{' '}
              <span className="bg-gradient-to-r from-[#E11D2E] via-[#ff3b4c] to-[#b91220] bg-clip-text text-transparent">
                MOTORS
              </span>
            </h1>

            {/* Crisp Sub-Headline */}
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl">
              {BUSINESS_INFO.subHeadline}
            </p>

            {/* Kinetic Italic Tagline */}
            <div className="mt-3 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-gradient-to-r from-[#E11D2E] to-transparent"
              />
              <p className="text-base font-semibold italic tracking-wide text-zinc-300 sm:text-lg">
                &ldquo;{BUSINESS_INFO.tagline}&rdquo;
              </p>
            </div>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-[#E11D2E] px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_30px_rgba(225,29,46,0.42)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c81827] hover:shadow-[0_0_40px_rgba(225,29,46,0.62)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-7 sm:text-base"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="tabular-nums">
                  Call {BUSINESS_INFO.primaryPhoneShort}
                </span>
              </a>

              <a
                href={DEFAULT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/12 px-6 text-sm font-semibold tracking-wide text-emerald-300 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-7 sm:text-base"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Compact Live Trust Strip (Clean Unboxed Typographic Metadata) */}
            <div className="mt-8 border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-zinc-400 sm:text-sm">
                <span className="text-zinc-200 tabular-nums">
                  19+ Years Legacy
                </span>
                <span className="text-[#E11D2E]" aria-hidden="true">
                  •
                </span>
                <span className="text-zinc-200">100% Genuine OEM</span>
                <span className="text-[#E11D2E]" aria-hidden="true">
                  •
                </span>
                <span className="text-zinc-200">Car &amp; Bike Specialists</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bevel-Framed Flagship Showroom Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Subtle Crimson Ambient Halo behind Bevel Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#E11D2E]/25 via-transparent to-[#D4AF37]/15 opacity-70 blur-2xl"
              />

              {/* Metallic Bevel Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#1A1A22] to-[#0E0E12] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.75)] sm:p-3">
                {/* Crimson Precision Edge Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E11D2E] to-transparent"
                />

                {/* Poster Container — zero cropping via object-contain */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#09090B]">
                  {!posterError ? (
                    <img
                      src={BUSINESS_INFO.assets.heroPoster}
                      alt="Krishna Motors Patiala — Genuine Car and Bike Spare Parts and Engine Lubricants Showroom Banner"
                      referrerPolicy="no-referrer"
                      onError={() => setPosterError(true)}
                      className="block h-auto w-full object-contain"
                    />
                  ) : (
                    <div className="flex aspect-square flex-col items-center justify-center bg-gradient-to-br from-[#16161D] to-[#09090B] p-8 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-[#E11D2E]/40 bg-[#E11D2E]/15 text-[#E11D2E]">
                        <Wrench className="h-7 w-7" />
                      </div>
                      <p className="font-display text-3xl font-bold uppercase tracking-wide text-white">
                        Krishna Motors
                      </p>
                      <p className="mt-2 max-w-sm text-sm text-zinc-400">
                        {BUSINESS_INFO.subHeadline}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Metallic Caption Bar + Heritage Glass Tag */}
                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 px-1.5 pb-0.5 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <ShieldCheck
                      className="h-4 w-4 shrink-0 text-[#E11D2E]"
                      aria-hidden="true"
                    />
                    <span className="font-medium">
                      Bhadson Road Flagship Showroom
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-[#D4AF37]/35 bg-[#09090B]/90 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#E6C766] uppercase backdrop-blur-md tabular-nums">
                    <span>Since 2007</span>
                    <span className="text-zinc-500" aria-hidden="true">
                      •
                    </span>
                    <span>Patiala</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
