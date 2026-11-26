import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';
import { SocialLinks } from './SocialLinks';

export function HeroSection() {
  return (
    <section id="home" className="bg-light-surface py-gutter-xl md:py-section">
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
          <div className="flex flex-col gap-gutter-sm">
            <p className="font-label text-label-lg text-light-primary tracking-wider uppercase">
              HELLO, I&apos;M
            </p>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-light-on-surface text-balance">
              {PORTFOLIO_PROFILE.name}
            </h1>
            <p className="font-headline text-headline-md text-light-secondary">
              {PORTFOLIO_PROFILE.role}
            </p>
          </div>

          <p className="font-body text-body-lg text-light-on-surface-variant max-w-prose text-pretty">
            I design clean, modern and user-friendly websites that help businesses grow and create a strong online presence.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-gutter-md">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-gutter-sm px-6 py-3 rounded-full bg-light-primary text-light-on-primary shadow-sm hover:bg-light-primary-container hover:-translate-y-0.5 transition-transform duration-state-change ease-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <span className="font-label text-label-lg">View My Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-gutter-sm px-6 py-3 rounded-full bg-light-surface-container-lowest text-light-primary border border-light-outline-variant hover:bg-light-surface-container-low hover:border-light-primary transition-colors duration-state-change ease-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <span className="font-label text-label-lg">Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-gutter-sm flex flex-wrap items-center gap-gutter-sm">
            <span className="font-label text-label-md text-light-on-surface-variant mr-2">
              Connect:
            </span>
            <SocialLinks includeEmail size="md" />
          </div>
        </div>

        {/* Right Column: Designer Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="rounded-2xl bg-light-surface-container p-gutter-md border border-light-outline-variant/60 shadow-md">
              <div className="rounded-xl overflow-hidden bg-light-surface-container-lowest aspect-[3/4]">
                <ResilientImage
                  src={PORTFOLIO_PROFILE.heroImage}
                  alt={`Portrait of ${PORTFOLIO_PROFILE.name}, ${PORTFOLIO_PROFILE.role}`}
                  fallbackLabel={PORTFOLIO_PROFILE.name}
                />
              </div>
              <div className="mt-gutter-md px-gutter-sm py-gutter-xs flex items-center justify-between gap-gutter-sm">
                <div className="flex items-center gap-gutter-sm">
                  <span
                    role="status"
                    aria-label="Available for work"
                    className="inline-block w-2.5 h-2.5 rounded-full bg-light-tertiary shrink-0"
                  />
                  <span className="font-label text-label-md text-light-on-surface">
                    {PORTFOLIO_PROFILE.availabilityShort}
                  </span>
                </div>
                <span className="font-label text-label-md text-light-secondary shrink-0">
                  {PORTFOLIO_PROFILE.shortLocation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
