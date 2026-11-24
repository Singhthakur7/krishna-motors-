import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Globe,
  Navigation,
  ExternalLink,
  Instagram,
  Facebook,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/krishnaMotors';

export function ContactLocation() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-white/8 bg-[#0C0C10] py-16 sm:py-20 lg:py-24"
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
            Contact &amp; Showroom Location
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-2 text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
          >
            Visit Krishna Motors, Patiala
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Conveniently located on Bhadson Road near Jashan Palace. Walk in for
            genuine spare parts, lubricants, or call our showroom desk directly.
          </p>
        </motion.div>

        {/* 2-Column Showroom Details & Dark Google Map */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Card: Visit Our Showroom */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121216] p-6 sm:p-8 lg:col-span-6"
          >
            <div className="space-y-6">
              {/* Address Block */}
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  Visit Our Showroom
                </h3>
                <div className="mt-4 flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E11D2E]/40 bg-[#E11D2E]/15 text-[#E11D2E] shadow-[0_0_20px_rgba(225,29,46,0.22)]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                      Showroom Address
                    </p>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-zinc-200 sm:text-base">
                      {BUSINESS_INFO.address}
                    </address>
                  </div>
                </div>
              </div>

              {/* Dual Tappable Phone Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#09090B]/85 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E11D2E]/60 hover:bg-[#171216] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E11D2E]/15 text-[#E11D2E] transition-colors group-hover:bg-[#E11D2E] group-hover:text-white">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
                      Primary Desk
                    </p>
                    <p className="font-display truncate text-lg font-bold tracking-wide text-white tabular-nums">
                      {BUSINESS_INFO.primaryPhoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#09090B]/85 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E11D2E]/60 hover:bg-[#171216] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E11D2E]/15 text-[#E11D2E] transition-colors group-hover:bg-[#E11D2E] group-hover:text-white">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
                      Alternate Desk
                    </p>
                    <p className="font-display truncate text-lg font-bold tracking-wide text-white tabular-nums">
                      {BUSINESS_INFO.secondaryPhoneDisplay}
                    </p>
                  </div>
                </a>
              </div>

              {/* Website & Social Channels */}
              <div className="space-y-3 border-t border-white/8 pt-5">
                <a
                  href={BUSINESS_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#09090B]/60 px-4 py-3 text-sm text-zinc-200 transition-colors hover:border-white/25 hover:text-white"
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <Globe
                      className="h-4 w-4 shrink-0 text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span className="truncate font-medium">
                      {BUSINESS_INFO.websiteDisplay}
                    </span>
                  </span>
                  <ExternalLink
                    className="h-3.5 w-3.5 shrink-0 text-zinc-400"
                    aria-hidden="true"
                  />
                </a>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">
                    Follow Us:
                  </span>
                  <a
                    href={BUSINESS_INFO.social.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 text-xs font-semibold text-zinc-200 transition-all duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
                  >
                    <Facebook className="h-4 w-4 text-blue-400" aria-hidden="true" />
                    <span>{BUSINESS_INFO.social.facebookLabel}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 text-xs font-semibold text-zinc-200 transition-all duration-200 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white"
                  >
                    <Instagram className="h-4 w-4 text-pink-400" aria-hidden="true" />
                    <span>{BUSINESS_INFO.social.instagramLabel}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Prominent Google Maps Directions Button */}
            <div className="mt-7">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#E11D2E] px-6 text-sm font-semibold tracking-wide text-white shadow-[0_0_26px_rgba(225,29,46,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c81827] hover:shadow-[0_0_34px_rgba(225,29,46,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
              >
                <Navigation className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Get Directions on Google Maps →</span>
              </a>
            </div>
          </motion.div>

          {/* Right Card: Dark-Styled Live Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121216] p-2.5 sm:p-3 lg:col-span-6"
          >
            <div className="relative flex-1 min-h-[340px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#09090B] lg:min-h-full">
              <iframe
                title="Krishna Motors Location Map — Near Jashan Palace, Bhadson Road, Patiala 147001"
                src={BUSINESS_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="km-dark-map h-full min-h-[340px] w-full border-0 lg:min-h-[470px]"
                allowFullScreen
              />
            </div>

            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 px-2 pb-0.5 text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">
                Near Jashan Palace, Bhadson Road, Patiala - 147001
              </span>
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#E11D2E] hover:underline"
              >
                Open Full Map →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
