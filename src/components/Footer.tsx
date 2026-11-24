import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Globe } from 'lucide-react';
import {
  BUSINESS_INFO,
  DEFAULT_WHATSAPP_URL,
  NAV_LINKS,
} from '../data/krishnaMotors';

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 bg-[#09090B] pt-14 pb-28 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <a
                href="#home"
                aria-label="Back to top — Krishna Motors"
                className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]"
              >
                {!logoError ? (
                  <div className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 ring-1 ring-white/25 shadow-md">
                    <img
                      src={BUSINESS_INFO.assets.logo}
                      alt="Krishna Motors Logo"
                      referrerPolicy="no-referrer"
                      onError={() => setLogoError(true)}
                      className="h-9 w-auto object-contain sm:h-10"
                    />
                  </div>
                ) : (
                  <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    KRISHNA <span className="text-[#E11D2E]">MOTORS</span>
                  </span>
                )}
              </a>

              <p className="mt-4 text-sm font-semibold italic text-zinc-300">
                &ldquo;{BUSINESS_INFO.tagline}&rdquo;
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
                {BUSINESS_INFO.subHeadline}. Serving Patiala with 100% genuine
                OEM spare parts and engine lubricants since {BUSINESS_INFO.sinceYear}.
              </p>
            </div>

            {/* Quick Section Links */}
            <div className="md:col-span-3">
              <h3 className="font-display text-sm font-bold tracking-[0.16em] text-zinc-300 uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Column */}
            <div className="md:col-span-4">
              <h3 className="font-display text-sm font-bold tracking-[0.16em] text-zinc-300 uppercase">
                Direct Showroom Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#E11D2E]" aria-hidden="true" />
                  <a
                    href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                    className="font-medium text-zinc-200 tabular-nums transition-colors hover:text-white"
                  >
                    {BUSINESS_INFO.primaryPhoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#E11D2E]" aria-hidden="true" />
                  <a
                    href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                    className="font-medium text-zinc-200 tabular-nums transition-colors hover:text-white"
                  >
                    {BUSINESS_INFO.secondaryPhoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                  <a
                    href={BUSINESS_INFO.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    {BUSINESS_INFO.websiteDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
            <p>© 2026 Krishna Motors, Patiala. All rights reserved.</p>
            <p className="text-zinc-400">
              Bhadson Road, Patiala - 147001, Punjab
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile-Only Sticky Quick-Action Dock */}
      <nav
        aria-label="Quick Mobile Actions"
        className="fixed right-3 bottom-3 left-3 z-50 rounded-2xl border border-white/15 bg-zinc-950/90 p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.75)] backdrop-blur-lg md:hidden"
      >
        <div className="grid grid-cols-3 gap-1.5">
          <a
            href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
            className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#E11D2E] text-xs font-semibold text-white shadow-[0_0_16px_rgba(225,29,46,0.4)] active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Call</span>
          </a>

          <a
            href={DEFAULT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-1.5 rounded-xl border border-emerald-500/35 bg-emerald-500/15 text-xs font-semibold text-emerald-300 active:scale-[0.98]"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.06] text-xs font-semibold text-zinc-100 active:scale-[0.98]"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#E11D2E]" aria-hidden="true" />
            <span>Map</span>
          </a>
        </div>
      </nav>
    </>
  );
}
