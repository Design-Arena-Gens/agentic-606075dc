"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <Logo className="hero-logo" />
          <h1>Fuji Tour Guide</h1>
          <p>
            Premium one-day journeys to Mt. Fuji in luxurious Toyota Vellfire
            and Alphard vehicles. Crafted for discerning travelers seeking
            comfort, style, and breathtaking scenery.
          </p>
          <div className="cta">
            <Link href="https://fujitourguide.com" target="_blank">
              Explore the full experience
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <h2>Visual Identity</h2>
          <p className="hero-subtitle">
            Inspired by sunrise palettes and alpine silhouettes, blending
            sophistication with the spirit of Mt. Fuji.
          </p>
          <div className="palette">
            <div className="swatch swatch-sunrise">
              <span>#F2594B</span>
              <span>Sunrise Coral</span>
            </div>
            <div className="swatch swatch-cream">
              <span>#F5E5D3</span>
              <span>Warm Mist</span>
            </div>
            <div className="swatch swatch-indigo">
              <span>#2F3C73</span>
              <span>Twilight Indigo</span>
            </div>
            <div className="swatch swatch-charcoal">
              <span>#1D1F2A</span>
              <span>Midnight Charcoal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="details">
        <div className="details-block">
          <h3>Logo Concept</h3>
          <p>
            The emblem combines Mt. Fuji&apos;s iconic silhouette, the glint of
            a morning sun, and the streamlined profile of a luxury Toyota
            minivan. The typography underscores dependable, refined service with
            subtle curvature that echoes the vehicle&apos;s contours.
          </p>
        </div>
        <div className="details-block">
          <h3>Usage Guidance</h3>
          <ul>
            <li>Primary display on light backgrounds for digital and print.</li>
            <li>Use monochrome variant for embossing or single-color media.</li>
            <li>Maintain ample whitespace equal to the height of the sun icon.</li>
          </ul>
        </div>
        <div className="details-block">
          <h3>Typography</h3>
          <p>
            Headings use Inter SemiBold for clarity and modern appeal, while
            copy falls back to Inter Regular for comfortable readability across
            devices.
          </p>
        </div>
      </section>
    </main>
  );
}
