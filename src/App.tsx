/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsMarquee } from './components/BrandsMarquee';
import { TrustPillars } from './components/TrustPillars';
import { PartsShowcase } from './components/PartsShowcase';
import { AboutInquiry } from './components/AboutInquiry';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-[#09090B] text-[#E4E4E7]">
        <Navbar />
        <main>
          <Hero />
          <BrandsMarquee />
          <TrustPillars />
          <PartsShowcase />
          <AboutInquiry />
          <ContactLocation />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
