import { PenLine } from 'lucide-react';
import { EDUCATION, EXPERIENCE_HIGHLIGHTS } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section
      id="education"
      className="bg-light-surface-container-low py-gutter-xl md:py-section border-y border-light-outline-variant/40"
    >
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-xs max-w-2xl">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
            Education &amp; Experience
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant">
            Academic milestones and ongoing practical design growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-gutter-md">
            <h3 className="font-title text-title-lg text-light-on-surface">Education</h3>
            <div className="relative pl-6 border-l-2 border-light-outline-variant flex flex-col gap-gutter-lg">
              {EDUCATION.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[33px] top-6 w-4 h-4 rounded-full border-4 border-light-surface-container-low ${
                      item.isCurrent ? 'bg-light-primary' : 'bg-light-secondary'
                    }`}
                  />
                  <div className="flex flex-wrap items-center justify-between gap-gutter-sm mb-2">
                    <span
                      className={`px-3 py-1 rounded-full font-label text-label-md ${
                        item.isCurrent
                          ? 'bg-light-surface-container text-light-primary'
                          : 'bg-light-secondary-container/60 text-light-on-secondary-container'
                      }`}
                    >
                      {item.period}
                    </span>
                    <span
                      className={`font-label text-label-md tabular-nums ${
                        item.isCurrent ? 'text-light-on-surface-variant' : 'text-light-primary'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-title text-title-md text-light-on-surface">
                    {item.degree}
                  </h4>
                  <p className="font-body text-body-md text-light-on-surface-variant mt-1">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Experience */}
          <div className="lg:col-span-5 flex flex-col gap-gutter-md">
            <h3 className="font-title text-title-lg text-light-on-surface">Experience</h3>
            <article className="bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm flex flex-col gap-gutter-md">
              <div className="w-12 h-12 rounded-xl bg-light-surface-container text-light-primary flex items-center justify-center">
                <PenLine className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-sm">
                <h4 className="font-title text-title-lg text-light-on-surface">
                  Self-Directed Design &amp; Practice
                </h4>
                <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
                  Building practical web design skills through personal projects and continuous learning.
                </p>
              </div>
              <div className="pt-gutter-sm border-t border-light-outline-variant/50 flex flex-wrap gap-gutter-sm">
                {EXPERIENCE_HIGHLIGHTS.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 rounded-full bg-light-surface-container-low text-light-on-surface-variant font-label text-label-md"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
