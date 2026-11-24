import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO, DEFAULT_WHATSAPP_URL } from '../data/krishnaMotors';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-carbon-mesh pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      {/* Ambient Radial Crimson Showroom Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-crimson-spotlight"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[720px] -translate-x-1/2 rounded-full bg-[#E11D2E]/14 blur-[130px]"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Metallic Gold Heritage Accent */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs text-[#D4AF37]" aria-hidden="true">
              ★
            </span>
            <span className="text-[11px] font-semibold tracking-[0.16em] text-[#E6C766] uppercase sm:text-xs">
              Patiala&apos;s Trusted Auto Hub • Since 2007
            </span>
          </div>

          {/* Flagship Display Title */}
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.94] tracking-tight text-balance sm:text-7xl lg:text-[5.25rem]">
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              KRISHNA
            </span>{' '}
            <span className="bg-gradient-to-r from-[#E11D2E] via-[#ff3b4c] to-[#b91220] bg-clip-text text-transparent">
              MOTORS
            </span>
          </h1>

          {/* Crisp Sub-Headline */}
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl lg:text-2xl">
            {BUSINESS_INFO.subHeadline}
          </p>

          {/* Kinetic Italic Tagline */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#E11D2E]"
            />
            <p className="text-base font-semibold italic tracking-wide text-zinc-300 sm:text-lg">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </p>
            <span
              aria-hidden="true"
              className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#E11D2E]"
            />
          </div>

          {/* Primary CTA Buttons */}
          <div className="mt-9 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
              className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-[#E11D2E] px-7 text-sm font-semibold tracking-wide text-white shadow-[0_0_30px_rgba(225,29,46,0.42)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c81827] hover:shadow-[0_0_40px_rgba(225,29,46,0.62)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-8 sm:text-base"
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
              className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/12 px-7 text-sm font-semibold tracking-wide text-emerald-300 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-8 sm:text-base"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Compact Live Trust Strip */}
          <div className="mt-10 w-full max-w-2xl border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-xs font-medium text-zinc-400 sm:text-sm">
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
              <span className="hidden text-[#E11D2E] sm:inline" aria-hidden="true">
                •
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-white"
              >
                <MapPin className="h-3.5 w-3.5 text-[#E11D2E]" aria-hidden="true" />
                <span>{BUSINESS_INFO.shortLocation}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
