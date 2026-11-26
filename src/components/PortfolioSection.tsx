import { useState } from 'react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';
import { ModalTab, ProjectModal } from './ProjectModal';

type FilterOption = 'All' | ProjectCategory;

const FILTER_OPTIONS: FilterOption[] = ['All', 'Website', 'Landing Page', 'UI/UX'];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<ModalTab>('preview');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const openModal = (project: ProjectItem, tab: ModalTab) => {
    setSelectedProject(project);
    setModalTab(tab);
  };

  return (
    <section id="portfolio" className="bg-light-surface py-gutter-xl md:py-section">
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl flex flex-col gap-gutter-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-lg">
          <div className="flex flex-col gap-gutter-xs max-w-xl">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
              My Portfolio
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Demonstration concepts showcasing layout craft, responsive grids, and UI polish. Labeled as Sample Projects until replaced with client work.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-gutter-sm"
          >
            {FILTER_OPTIONS.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? 'px-5 py-2 rounded-full bg-light-primary text-light-on-primary font-label text-label-lg transition-colors duration-state-change whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2'
                      : 'px-5 py-2 rounded-full bg-light-surface-container-lowest text-light-on-surface-variant border border-light-outline-variant hover:border-light-primary font-label text-label-lg transition-colors duration-state-change whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2'
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-xl items-stretch">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-light-surface-container-lowest rounded-xl overflow-hidden border border-light-outline-variant/60 shadow-sm hover:-translate-y-1 transition-transform duration-surface-enter ease-surface-enter flex flex-col justify-between h-full"
            >
              <div>
                <button
                  type="button"
                  onClick={() => openModal(project, 'preview')}
                  aria-label={`Preview ${project.title}`}
                  className="block bg-light-surface-container-low aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-light-primary"
                >
                  <ResilientImage
                    src={project.image}
                    alt={`${project.title} preview`}
                    fallbackLabel={project.title}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-surface-enter"
                  />
                </button>
                <div className="p-gutter-lg flex flex-col gap-gutter-sm">
                  <div className="flex flex-wrap items-center justify-between gap-gutter-sm">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-light-secondary-container/60 text-light-on-secondary-container font-label text-label-md">
                      Sample Project
                    </span>
                    <span className="font-label text-label-md text-light-primary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-title text-title-lg text-light-on-surface">
                    {project.title}
                  </h3>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-gutter-xs pt-gutter-xs">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-light-surface-container-low text-light-on-surface-variant font-label text-label-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <footer className="px-gutter-lg pb-gutter-lg pt-gutter-sm flex flex-wrap items-center gap-gutter-sm">
                <button
                  type="button"
                  onClick={() => openModal(project, 'preview')}
                  className="inline-flex items-center justify-center gap-gutter-xs px-5 py-2.5 rounded-full bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2"
                >
                  <span>Live Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => openModal(project, 'code')}
                  className="inline-flex items-center justify-center gap-gutter-xs px-5 py-2.5 rounded-full bg-light-surface-container-low text-light-primary border border-light-outline-variant font-label text-label-lg hover:bg-light-surface-container transition-colors duration-state-change whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2"
                >
                  <span>Source Code</span>
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        initialTab={modalTab}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
