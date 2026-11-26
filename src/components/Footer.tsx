import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-surface-container-low border-t border-light-outline-variant/60 py-gutter-xl">
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl flex flex-col md:flex-row items-center justify-between gap-gutter-md">
        <div className="flex flex-col sm:flex-row items-center gap-gutter-sm text-center sm:text-left">
          <span className="font-headline text-title-md text-light-on-surface">
            {PORTFOLIO_PROFILE.name}
          </span>
          <span className="hidden sm:inline text-light-outline" aria-hidden="true">
            |
          </span>
          <span className="font-label text-label-lg text-light-primary">
            {PORTFOLIO_PROFILE.role}
          </span>
        </div>

        <SocialLinks size="sm" />

        <p className="font-body text-body-md text-light-on-surface-variant text-center md:text-right">
          © {currentYear} {PORTFOLIO_PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
