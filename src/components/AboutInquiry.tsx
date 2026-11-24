import { useState, useRef, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Car, Bike, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  BUSINESS_INFO,
  HERITAGE_STATS,
  buildWhatsAppUrl,
} from '../data/krishnaMotors';

type VehicleType = 'Car' | 'Bike';

export function AboutInquiry() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('Car');
  const [vehicleModel, setVehicleModel] = useState('');
  const [partNeeded, setPartNeeded] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sentNotice, setSentNotice] = useState(false);

  const modelInputRef = useRef<HTMLInputElement>(null);
  const partInputRef = useRef<HTMLInputElement>(null);

  const trimmedModel = vehicleModel.trim();
  const trimmedPart = partNeeded.trim();

  const composedMessage = `Hello Krishna Motors, I want to check availability for:\n• Vehicle Type: ${vehicleType}\n• Vehicle Model: ${trimmedModel || 'Not specified'}\n• Part / Oil Needed: ${trimmedPart || 'Not specified'}`;

  const whatsappHref = buildWhatsAppUrl(composedMessage);

  const handleWhatsAppClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!trimmedModel) {
      e.preventDefault();
      setSentNotice(false);
      setErrorMessage('Please enter your vehicle model (e.g., Swift, Bullet 350, Activa).');
      modelInputRef.current?.focus();
      return;
    }

    if (!trimmedPart) {
      e.preventDefault();
      setSentNotice(false);
      setErrorMessage('Please enter the spare part or engine oil you need.');
      partInputRef.current?.focus();
      return;
    }

    setErrorMessage(null);
    setSentNotice(true);
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-t border-white/8 bg-[#09090B] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle Ambient Gold & Crimson Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#E11D2E]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heritage Story + 3 Metallic Stat Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
                <span>About Us</span>
                <span aria-hidden="true">•</span>
                <span className="tabular-nums">Since 2007</span>
              </div>

              <h2
                id="about-heading"
                className="font-display mt-3 text-3xl font-bold uppercase tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
              >
                19+ Years of Automotive Trust in Patiala
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Established in <strong className="font-semibold text-white">2007</strong> on
                Bhadson Road, <strong className="font-semibold text-white">{BUSINESS_INFO.name}</strong>{' '}
                has built an enduring reputation as Patiala&apos;s dependable destination
                for authentic four-wheeler and two-wheeler spare parts and
                high-performance lubricants.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Whether you maintain a daily commuter bike, a family car, or run a
                busy neighborhood workshop, we stock genuine OEM-grade components
                and tested synthetic &amp; mineral oils so every vehicle leaves with
                factory-level reliability. Our philosophy is simple:{' '}
                <span className="italic text-zinc-200">
                  &ldquo;{BUSINESS_INFO.tagline}&rdquo;
                </span>
              </p>
            </div>

            {/* 3 Bold Metallic Stat Blocks */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {HERITAGE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-gradient-to-b from-[#17171D] to-[#111115] p-4 text-center sm:p-5"
                >
                  <div className="font-display text-2xl font-bold tracking-tight text-white tabular-nums sm:text-3xl lg:text-4xl">
                    {stat.value === '2007' ? (
                      <span className="text-[#D4AF37]">{stat.value}</span>
                    ) : stat.value === '100%' ? (
                      <span className="text-[#E11D2E]">{stat.value}</span>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="mt-1 text-[11px] font-medium tracking-wide text-zinc-400 uppercase sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Zero-Backend WhatsApp Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/12 bg-[#121216]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-8">
              {/* Top Crimson Accent Line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/60 to-emerald-500/70"
              />

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-emerald-400 uppercase">
                  Instant Showroom Desk
                </p>
                <h3 className="font-display mt-1.5 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                  Check Part Availability Instantly
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Enter your vehicle and required spare part or lubricant to send a
                  pre-filled inquiry straight to our Patiala counter on WhatsApp.
                </p>

                {/* Form Inputs */}
                <div className="mt-6 space-y-5">
                  {/* 1. Vehicle Type Toggle */}
                  <div>
                    <span className="mb-2 block text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                      1. Select Vehicle Type
                    </span>
                    <div
                      role="group"
                      aria-label="Vehicle Type"
                      className="grid grid-cols-2 gap-3"
                    >
                      {(['Car', 'Bike'] as const).map((type) => {
                        const selected = vehicleType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setVehicleType(type);
                              setSentNotice(false);
                            }}
                            aria-pressed={selected}
                            className={`flex h-12 items-center justify-center gap-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E] ${
                              selected
                                ? 'border-[#E11D2E] bg-[#E11D2E]/15 text-white shadow-[0_0_20px_rgba(225,29,46,0.22)]'
                                : 'border-white/10 bg-[#09090B]/80 text-zinc-400 hover:border-white/25 hover:text-zinc-200'
                            }`}
                          >
                            {type === 'Car' ? (
                              <Car className="h-4 w-4 shrink-0" aria-hidden="true" />
                            ) : (
                              <Bike className="h-4 w-4 shrink-0" aria-hidden="true" />
                            )}
                            <span>{type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Vehicle Model */}
                  <div>
                    <label
                      htmlFor="km-vehicle-model"
                      className="mb-2 block text-xs font-semibold tracking-wider text-zinc-300 uppercase"
                    >
                      2. Vehicle Model
                    </label>
                    <input
                      ref={modelInputRef}
                      id="km-vehicle-model"
                      type="text"
                      value={vehicleModel}
                      onChange={(e) => {
                        setVehicleModel(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                        if (sentNotice) setSentNotice(false);
                      }}
                      placeholder="e.g., Swift, Bullet 350, Activa"
                      className="h-12 w-full rounded-xl border border-white/12 bg-[#09090B]/90 px-4 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-[#E11D2E] focus:outline-none focus:ring-1 focus:ring-[#E11D2E]"
                    />
                  </div>

                  {/* 3. Part or Oil Needed */}
                  <div>
                    <label
                      htmlFor="km-part-needed"
                      className="mb-2 block text-xs font-semibold tracking-wider text-zinc-300 uppercase"
                    >
                      3. Part or Oil Needed
                    </label>
                    <input
                      ref={partInputRef}
                      id="km-part-needed"
                      type="text"
                      value={partNeeded}
                      onChange={(e) => {
                        setPartNeeded(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                        if (sentNotice) setSentNotice(false);
                      }}
                      placeholder="e.g., Engine Oil, Brake Pad, Air Filter"
                      className="h-12 w-full rounded-xl border border-white/12 bg-[#09090B]/90 px-4 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-[#E11D2E] focus:outline-none focus:ring-1 focus:ring-[#E11D2E]"
                    />
                  </div>
                </div>

                {/* Inline Validation / Sent Feedback */}
                {errorMessage && (
                  <div
                    role="alert"
                    className="mt-4 flex items-center gap-2 rounded-xl border border-[#E11D2E]/40 bg-[#E11D2E]/10 px-3.5 py-2.5 text-xs font-medium text-red-200"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 text-[#E11D2E]" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {sentNotice && !errorMessage && (
                  <div
                    role="status"
                    className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-2.5 text-xs font-medium text-emerald-200"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                    <span>
                      Opening WhatsApp with your {vehicleType} inquiry for{' '}
                      <strong className="font-semibold text-white">{trimmedModel}</strong>.
                    </span>
                  </div>
                )}
              </div>

              {/* Submit / Direct WhatsApp Action */}
              <div className="mt-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#E11D2E] to-emerald-600 px-6 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(225,29,46,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
                >
                  <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Send on WhatsApp →</span>
                </a>
                <p className="mt-2.5 text-center text-xs text-zinc-500">
                  Direct to {BUSINESS_INFO.primaryPhoneDisplay} • Fast counter response
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
