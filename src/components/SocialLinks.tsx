import { Mail } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

function SocialSvg({ id }: { id: string }) {
  switch (id) {
    case 'facebook':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'github':
    default:
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
  }
}

interface SocialLinksProps {
  includeEmail?: boolean;
  size?: 'md' | 'sm';
}

export function SocialLinks({ includeEmail = false, size = 'md' }: SocialLinksProps) {
  const dimensionClass = size === 'md' ? 'w-10 h-10' : 'w-9 h-9';

  return (
    <div className="flex flex-wrap items-center gap-gutter-sm">
      {PORTFOLIO_PROFILE.socials.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`inline-flex items-center justify-center ${dimensionClass} rounded-full bg-light-surface-container-lowest text-light-on-surface-variant border border-light-outline-variant hover:text-light-primary hover:border-light-primary hover:-translate-y-0.5 transition-transform duration-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary`}
        >
          <SocialSvg id={item.id} />
        </a>
      ))}
      {includeEmail && (
        <a
          href={`mailto:${PORTFOLIO_PROFILE.email}`}
          aria-label={`Email ${PORTFOLIO_PROFILE.name}`}
          className={`inline-flex items-center justify-center ${dimensionClass} rounded-full bg-light-surface-container-lowest text-light-on-surface-variant border border-light-outline-variant hover:text-light-primary hover:border-light-primary hover:-translate-y-0.5 transition-transform duration-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary`}
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
