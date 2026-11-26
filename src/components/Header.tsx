import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-light-surface-container-lowest/95 backdrop-blur-sm border-b border-light-outline-variant/60">
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl h-20 flex items-center justify-between gap-gutter-md">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-gutter-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary rounded-lg shrink-0"
        >
          <div className="w-11 h-11 rounded-full bg-light-primary text-light-on-primary flex items-center justify-center shadow-sm group-hover:bg-light-primary-container transition-colors duration-state-change">
            <span className="font-headline text-title-md">{PORTFOLIO_PROFILE.initials}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-title-md text-light-on-surface leading-tight whitespace-nowrap">
              {PORTFOLIO_PROFILE.name}
            </span>
            <span className="font-label text-label-md text-light-primary whitespace-nowrap">
              {PORTFOLIO_PROFILE.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-gutter-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-label-lg text-light-on-surface-variant hover:text-light-primary transition-colors duration-state-change whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-gutter-sm shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center gap-gutter-sm px-6 py-3 rounded-full bg-light-primary text-light-on-primary shadow-sm hover:bg-light-primary-container hover:-translate-y-0.5 transition-transform duration-state-change ease-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
          >
            <span className="font-label text-label-lg">Hire Me</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-light-surface-container-low text-light-on-surface border border-light-outline-variant hover:border-light-primary transition-colors duration-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-light-surface-container-lowest border-t border-light-outline-variant/60 px-gutter-lg py-gutter-lg"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-gutter-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2 px-3 rounded-lg font-label text-label-lg text-light-on-surface hover:bg-light-surface-container-low hover:text-light-primary transition-colors duration-state-change"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
