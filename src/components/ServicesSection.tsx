import { Layout, Monitor, PenTool, RefreshCw } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case 'website-design':
      return <Monitor className="w-6 h-6" aria-hidden="true" />;
    case 'ui-ux-design':
      return <PenTool className="w-6 h-6" aria-hidden="true" />;
    case 'landing-page':
      return <Layout className="w-6 h-6" aria-hidden="true" />;
    case 'website-redesign':
    default:
      return <RefreshCw className="w-6 h-6" aria-hidden="true" />;
  }
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-light-surface-container-low py-gutter-xl md:py-section border-y border-light-outline-variant/40"
    >
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-xs max-w-2xl">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
            Services
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant">
            Thoughtful web design services tailored to help individuals and businesses stand out online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-lg items-stretch">
          {SERVICES.map((service) => {
            const iconBoxClass =
              service.variant === 'primary'
                ? 'bg-light-surface-container text-light-primary'
                : 'bg-light-secondary-container/60 text-light-on-secondary-container';

            return (
              <article
                key={service.id}
                className="bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm hover:-translate-y-1 hover:border-light-primary/60 transition-transform duration-surface-enter ease-surface-enter flex flex-col gap-gutter-md h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBoxClass}`}>
                  <ServiceIcon id={service.id} />
                </div>
                <div className="flex flex-col gap-gutter-xs">
                  <h3 className="font-title text-title-lg text-light-on-surface">
                    {service.title}
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
