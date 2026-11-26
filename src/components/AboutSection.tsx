import { CORE_VALUES, PORTFOLIO_PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-light-surface-container-low py-gutter-xl md:py-section border-y border-light-outline-variant/40"
    >
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-xs max-w-2xl">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
            About Me
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant">
            A closer look at my background, design approach, and the values that guide every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
          {/* Workspace Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-light-surface-container-lowest p-gutter-sm border border-light-outline-variant/60 shadow-sm">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <ResilientImage
                  src={PORTFOLIO_PROFILE.workspaceImage}
                  alt="Rafia Tasnim Rimi working at a minimalist web design desk"
                  fallbackLabel="Design Workspace"
                />
              </div>
            </div>
          </div>

          {/* Bio, Details & Core Values */}
          <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
            <p className="font-body text-body-lg text-light-on-surface text-pretty">
              Hello! I&apos;m Rafia Tasnim Rimi, a creative and passionate Web Designer. I love creating clean, modern, visually attractive, and user-friendly websites. My goal is to help businesses build a strong online presence through beautiful and functional web experiences. I am always learning new technologies and improving my design skills.
            </p>

            {/* Key Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter-md">
              <div className="bg-light-surface-container-lowest rounded-xl p-gutter-md border border-light-outline-variant/60 flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">Location</span>
                <span className="font-title text-title-md text-light-on-surface">
                  {PORTFOLIO_PROFILE.location}
                </span>
              </div>
              <div className="bg-light-surface-container-lowest rounded-xl p-gutter-md border border-light-outline-variant/60 flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">Email</span>
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  className="font-title text-title-md text-light-on-surface hover:text-light-primary transition-colors duration-state-change break-all"
                >
                  {PORTFOLIO_PROFILE.email}
                </a>
              </div>
              <div className="bg-light-surface-container-lowest rounded-xl p-gutter-md border border-light-outline-variant/60 flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">Availability</span>
                <span className="font-title text-title-md text-light-on-surface">
                  {PORTFOLIO_PROFILE.availability}
                </span>
              </div>
            </div>

            {/* Core Values Card */}
            <article className="bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm flex flex-col gap-gutter-md">
              <header className="flex items-center justify-between gap-gutter-sm">
                <h3 className="font-title text-title-lg text-light-on-surface">Core Values</h3>
                <span className="px-3 py-1 rounded-full bg-light-secondary-container/60 text-light-on-secondary-container font-label text-label-md">
                  Design Ethos
                </span>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
                {CORE_VALUES.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-lg bg-light-surface-container-low p-gutter-md flex flex-col gap-gutter-xs"
                  >
                    <span className="font-title text-title-md text-light-primary">
                      {value.title}
                    </span>
                    <p className="font-body text-body-md text-light-on-surface-variant">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
