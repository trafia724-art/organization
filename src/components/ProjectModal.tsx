import { useEffect, useState } from 'react';
import { Check, Code2, Copy, Eye, Monitor, Smartphone, Tablet, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export type ModalTab = 'preview' | 'code';
type ViewportMode = 'desktop' | 'tablet' | 'mobile';

interface ProjectModalProps {
  project: ProjectItem | null;
  initialTab: ModalTab;
  onClose: () => void;
}

export function ProjectModal({ project, initialTab, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>(initialTab);
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
    setViewport('desktop');
    setCopied(false);
  }, [project, initialTab]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const frameWidthClass =
    viewport === 'mobile'
      ? 'max-w-[340px]'
      : viewport === 'tablet'
        ? 'max-w-[560px]'
        : 'max-w-full';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-light-on-surface/55 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-light-surface-container-lowest border border-light-outline-variant shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-light-surface-container-lowest/95 backdrop-blur-sm px-6 py-4 border-b border-light-outline-variant/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-label-md font-label text-light-primary">
              <span>Sample Project</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>
            <h3 id="project-modal-title" className="font-headline text-title-lg text-light-on-surface">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Mode Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-light-surface-container-low border border-light-outline-variant/60">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label text-label-md transition-colors duration-state-change whitespace-nowrap ${
                  activeTab === 'preview'
                    ? 'bg-light-primary text-light-on-primary shadow-sm'
                    : 'text-light-on-surface-variant hover:text-light-primary'
                }`}
              >
                <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Live Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label text-label-md transition-colors duration-state-change whitespace-nowrap ${
                  activeTab === 'code'
                    ? 'bg-light-primary text-light-on-primary shadow-sm'
                    : 'text-light-on-surface-variant hover:text-light-primary'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Source Code</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-light-surface-container-low text-light-on-surface border border-light-outline-variant hover:border-light-primary hover:text-light-primary transition-colors duration-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-6">
          {activeTab === 'preview' ? (
            <>
              {/* Responsive Frame Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-body-md text-light-on-surface-variant">
                  Interactive viewport preview
                </p>
                <div
                  role="group"
                  aria-label="Preview screen size"
                  className="flex items-center gap-1 p-1 rounded-lg bg-light-surface-container-low border border-light-outline-variant/60"
                >
                  <button
                    type="button"
                    onClick={() => setViewport('desktop')}
                    aria-label="Desktop preview"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-label text-label-md transition-colors ${
                      viewport === 'desktop'
                        ? 'bg-light-surface-container-lowest text-light-primary shadow-sm'
                        : 'text-light-on-surface-variant hover:text-light-on-surface'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('tablet')}
                    aria-label="Tablet preview"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-label text-label-md transition-colors ${
                      viewport === 'tablet'
                        ? 'bg-light-surface-container-lowest text-light-primary shadow-sm'
                        : 'text-light-on-surface-variant hover:text-light-on-surface'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Tablet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('mobile')}
                    aria-label="Mobile preview"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-label text-label-md transition-colors ${
                      viewport === 'mobile'
                        ? 'bg-light-surface-container-lowest text-light-primary shadow-sm'
                        : 'text-light-on-surface-variant hover:text-light-on-surface'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Framed Artwork */}
              <div className="rounded-xl bg-light-surface-container-low p-4 md:p-6 border border-light-outline-variant/60 flex justify-center">
                <div
                  className={`w-full ${frameWidthClass} transition-all duration-surface-enter rounded-xl overflow-hidden bg-light-surface-container-lowest border border-light-outline-variant shadow-sm`}
                >
                  <div className="px-4 py-2.5 bg-light-surface-container flex items-center justify-between border-b border-light-outline-variant/60">
                    <span className="font-mono text-label-sm text-light-on-surface-variant truncate">
                      {project.id}.rafiatasnim.design
                    </span>
                    <span className="font-label text-label-sm text-light-primary">
                      {viewport.charAt(0).toUpperCase() + viewport.slice(1)}
                    </span>
                  </div>
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <ResilientImage
                      src={project.image}
                      alt={`${project.title} full preview`}
                      fallbackLabel={project.title}
                    />
                  </div>
                </div>
              </div>

              {/* Details & Palette */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 flex flex-col gap-3">
                  <h4 className="font-title text-title-md text-light-on-surface">
                    Design Overview &amp; Highlights
                  </h4>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    {project.description}
                  </p>
                  <ul className="flex flex-col gap-2 pt-1">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="font-body text-body-md text-light-on-surface flex items-start gap-2.5"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-light-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4 flex flex-col gap-4 rounded-xl bg-light-surface-container-low p-4 border border-light-outline-variant/60">
                  <div>
                    <h4 className="font-label text-label-md text-light-primary mb-2">
                      Color Palette
                    </h4>
                    <div className="flex flex-col gap-2">
                      {project.palette.map((swatch) => (
                        <div key={swatch.hex} className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-5 h-5 rounded-md border border-light-outline-variant shrink-0"
                              style={{ backgroundColor: swatch.hex }}
                              aria-hidden="true"
                            />
                            <span className="font-body text-body-md text-light-on-surface">
                              {swatch.label}
                            </span>
                          </div>
                          <span className="font-mono text-label-sm text-light-on-surface-variant tabular-nums">
                            {swatch.hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-light-outline-variant/50">
                    <h4 className="font-label text-label-md text-light-primary mb-2">
                      Stack Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-light-surface-container-lowest text-light-on-surface-variant border border-light-outline-variant/50 font-label text-label-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-title text-title-md text-light-on-surface">
                    Component Markup Excerpt
                  </h4>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    Clean semantic layout structure used in this sample concept.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-surface-container-low text-light-primary border border-light-outline-variant hover:border-light-primary font-label text-label-md transition-colors duration-state-change"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-light-tertiary" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="rounded-xl bg-light-inverse-surface text-light-inverse-on-surface p-5 overflow-x-auto font-mono text-[13px] leading-relaxed border border-light-outline-variant/40">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
