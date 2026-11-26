export type ProjectCategory = 'Website' | 'Landing Page' | 'UI/UX';

export interface SkillItem {
  id: string;
  name: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  variant: 'primary' | 'secondary';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  technologies: string[];
  highlights: string[];
  palette: { label: string; hex: string }[];
  codeSnippet: string;
}

export interface EducationItem {
  id: string;
  period: string;
  badge: string;
  degree: string;
  institution: string;
  isCurrent?: boolean;
}

export const PORTFOLIO_PROFILE = {
  initials: 'RT',
  name: 'Rafia Tasnim Rimi',
  role: 'Web Designer',
  location: 'Sirajganj, Bangladesh',
  shortLocation: 'Sirajganj, BD',
  email: 'hello@rafiatasnim.com',
  phone: '+880 1XXX-XXXXXX',
  availability: 'Open to Freelance / Remote Work',
  availabilityShort: 'Open to Freelance & Remote',
  heroImage:
    'https://lh3.googleusercontent.com/aida/ALJJyrBVwOqFqMCgw1K_Xn8k1w5ZP-nJd_HZMN_MPkBIUSViOXlr-oBpVmWUW4Tkkj3DPc9Zk-3OSNLbiytHl4T3-P-qsdVA7aCG8cZfteWnXDmo8hwHBRTfpsNMVoEliOAuKSFn_CWSRarMWcAuADYvvStyeoPBDuI2IHTGox6--jaVaUsnNg2DjTRwfDnkWZRFeEW2DdBAtHpfRAqcIRG57FJpoT2x7dMQLb_wPKdMHTnQ5IgybTBIHg',
  workspaceImage:
    'https://lh3.googleusercontent.com/aida/ALJJyrDgWyrkeP_E87J1zkVH-egKsQdDKb8hgovUYoUcldKna5u4Zrddau92fwwz9iqqNRCVPvHEZagdcZ24_zVUNz_MO8Ui_pjwldSzvRm2Z586Cyi1LAm0-Tytb9NJ9CGN_-fkFHGD6dpSqA9kDjrMoWZOgjCiZ5e5p7fBhJGdwJfNXB1CT8VfMZvd7MsyzQWpEUtMLww3w1nA4SEPtI6bRe2nAfRQBO6AAVvGmAsaKd_GS8b7IBCmOT3hbQ',
  socials: [
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://facebook.com/your-profile',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/your-profile',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com/your-profile',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/your-username',
    },
  ],
};

export const SKILLS: SkillItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    description: 'Semantic page structure and accessible web markup.',
  },
  {
    id: 'css3',
    name: 'CSS3',
    description: 'Modern Flexbox, Grid, and responsive visual styling.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Interactive UI behaviors, filtering, and form validation.',
  },
  {
    id: 'react',
    name: 'React',
    description: 'Reusable UI components and clean state-driven interfaces.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Utility-first styling with consistent spacing and design tokens.',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    description: 'Rapid responsive grid prototyping and UI components.',
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Wireframing, high-fidelity mockups, and component kits.',
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    description: 'Interactive screen flows and visual interface prototypes.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-design',
    title: 'Website Design',
    description:
      'Modern and responsive websites built for clarity and seamless browsing across devices.',
    variant: 'primary',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Beautiful and user-centered design systems, wireframes, and intuitive interfaces.',
    variant: 'secondary',
  },
  {
    id: 'landing-page',
    title: 'Landing Page Design',
    description:
      'Attractive landing pages structured to engage visitors and highlight your core offer.',
    variant: 'primary',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description:
      'Improving existing websites with refreshed typography, spacing, and mobile usability.',
    variant: 'secondary',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ecolife',
    title: 'EcoLife – Nature Website',
    category: 'Website',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrD4C76YruKzwsaK_OeXoVMHwuDXc8oDTpNKvg1S-GOdon3tvQB645BzNBf-Id6JQr4up4a7XRPJ5p0af1jipu9jT36zR_Xwr4aO7uLtSvMFl3SoGtJnqwdigCT5s3lVGMddeTPIMGRM3WatcJVzRQ7nxa2XNRAoCa0yk0yQCaE2kFD7avy2FPdLy3PSqcqcqLX5b_JHmeUbnpsYtxovOTquvLpsu8DxqFnwsgeavABdmH3kV0-qZyyN',
    description:
      'An editorial nature conservation concept featuring serene botanical photography, clean section pacing, and clear volunteer calls to action.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    highlights: [
      'Editorial botanical hero split with clear volunteer onboarding CTA',
      'Accessible 12-column responsive layout across desktop, tablet, and mobile',
      'Earth-toned color tokens paired with high-contrast serif/sans typography',
    ],
    palette: [
      { label: 'Forest Moss', hex: '#1F5132' },
      { label: 'Meadow Mist', hex: '#EFF6F0' },
      { label: 'Bark Ink', hex: '#1D2820' },
    ],
    codeSnippet: `<section class="py-16 bg-emerald-50/40">
  <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
    <div class="lg:col-span-6 space-y-5">
      <p class="text-sm font-semibold text-emerald-800 tracking-wide">CONSERVATION INITIATIVE</p>
      <h1 class="text-4xl font-bold text-slate-900">Protect Local Biodiversity</h1>
      <p class="text-slate-600">Join seasonal habitat restoration and community tree-planting drives.</p>
      <a href="#volunteer" class="inline-flex px-6 py-3 rounded-full bg-emerald-800 text-white font-semibold">
        Become a Volunteer
      </a>
    </div>
  </div>
</section>`,
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    category: 'UI/UX',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrDh0aHk3jOWbZPxc6Yw_rnGxV-XlOXnIXporffZOYb-5wEPhcCPoG4c-bnX7rqpUd9C5f7CfpbadRMyhBai5Gt5jhLl7d3tr97XVfDcuU4MtE9gud42ahWUP-Je409xdE8crnzWMeMtlEOMkANBppiy1dorRZbzDN5B-dL2Ml9aN4R2Pp-GZ7Uhy0AHmVadGduthEJpynJWxwK8tzQ3Bl7ZUU5VtxxgXB8fC78pryg6yw7KQFi27Q',
    description:
      'A minimalist analytics workspace designed with soft tonal cards, readable data tables, and balanced visual hierarchy.',
    technologies: ['React', 'Tailwind CSS', 'Figma'],
    highlights: [
      'Modular KPI cards using tabular numerals for crisp metric scanning',
      'Soft surface layering without cluttered border shadows',
      'Collapsible sidebar navigation with keyboard-accessible focus states',
    ],
    palette: [
      { label: 'Studio Slate', hex: '#334155' },
      { label: 'Soft Canvas', hex: '#F8FAFC' },
      { label: 'Indigo Accent', hex: '#4F46E5' },
    ],
    codeSnippet: `export function MetricCard({ label, value, delta }: MetricProps) {
  return (
    <div className="rounded-xl bg-white p-5 border border-slate-200/70 shadow-sm">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-2xl font-bold tabular-nums text-slate-900">{value}</span>
        <span className="text-xs font-semibold text-emerald-700">{delta}</span>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'beauty-shop',
    title: 'Beauty Shop Landing Page',
    category: 'Landing Page',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrBaiqc6-XELLzf1W06MKs0CUbRSaPvxRp69K5d05EZ2oeEx5LVsUIaLuJRU5vSQygnTqgjwjO9YnwSvTaaL_rQCpK1KZZ6eD6YELdbOyDln_GdjBoRfZXQLBiVucAeuGwZhcsQZia_-_8lAbIBPKiTdogWOCyppR9OMxElg-CFltdXnf7vr4Vwg_ivRZXPC-5VQce5rpJKVrq6mFsDR6WI_lJSP3KrbKJ0fgV1fgrJLT4SJYU7uyQ_t',
    description:
      'A pastel-toned skincare and beauty landing page showcasing featured products, gentle typography, and high-clarity CTAs.',
    technologies: ['HTML5', 'CSS3', 'Figma'],
    highlights: [
      'Delicate rose-blush palette engineered for WCAG AA text legibility',
      'Focused product highlight cards with ingredient story summaries',
      'Streamlined single-offer hero layout reducing friction to purchase',
    ],
    palette: [
      { label: 'Rose Velvet', hex: '#9C375F' },
      { label: 'Blush Silk', hex: '#FFF0F2' },
      { label: 'Espresso', hex: '#23191C' },
    ],
    codeSnippet: `<article class="rounded-2xl bg-white border border-rose-200/70 overflow-hidden shadow-sm">
  <img src="/images/serum-showcase.jpg" alt="Botanical Radiance Serum" class="aspect-[4/3] w-full object-cover" />
  <div class="p-6 space-y-3">
    <span class="text-xs font-semibold text-rose-700">Daily Hydration</span>
    <h3 class="text-xl font-semibold text-stone-900">Botanical Radiance Serum</h3>
    <p class="text-sm text-stone-600">Lightweight rosehip and hyaluronic formula for calm, glowing skin.</p>
  </div>
</article>`,
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop Website',
    category: 'Website',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrBKJnveC_jjsLNQ40q-weOG1hlFAZk7O65YPHDhQLKPLgxQWS24VclTz46dr_siini8ZhBeLec1zl5HgaBspb3T_YYVJtv6528if52e_TKOFTFW6zu_mh8Mz74810Lpm5MuwInrtJYj5k6YNUPfyzB1sbFhQS3i03W0yn72T9sGCqESDxJk-vfQ7KloatA5eUifgajVMEDdzSQWNnmVui_7UtzDFnR2d5iSgRiPPSf6BiKy1T--6dbv',
    description:
      'A warm artisan cafe website concept with menu highlights, store hours, and a cozy editorial layout.',
    technologies: ['React', 'Bootstrap', 'Adobe XD'],
    highlights: [
      'Editorial menu grid organized by espresso, pour-over, and seasonal bakes',
      'Clear opening hours and neighborhood location block',
      'Warm roasted-caramel contrast accents for inviting hospitality feel',
    ],
    palette: [
      { label: 'Roasted Bean', hex: '#5C3A21' },
      { label: 'Oat Milk', hex: '#FAF5EF' },
      { label: 'Crema Gold', hex: '#C68B59' },
    ],
    codeSnippet: `<div class="grid md:grid-cols-2 gap-6">
  <div class="p-6 rounded-xl bg-amber-50/50 border border-amber-200/60">
    <div class="flex justify-between items-baseline">
      <h4 class="font-semibold text-stone-900">Single-Origin Pour Over</h4>
      <span class="font-mono text-sm text-amber-900">$4.50</span>
    </div>
    <p class="text-sm text-stone-600 mt-1">Floral Ethiopian roast brewed fresh to order.</p>
  </div>
</div>`,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'honours',
    period: 'Current',
    badge: 'Honours',
    degree: 'Honours in Zoology',
    institution: 'Sirajganj Government College',
    isCurrent: true,
  },
  {
    id: 'hsc',
    period: '2024',
    badge: 'GPA 5.00',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Islamia Government College, Sirajganj',
  },
  {
    id: 'ssc',
    period: '2022',
    badge: 'GPA 5.00',
    degree: 'Secondary School Certificate (SSC)',
    institution: "Saleha Ishaque Government Girls' High School",
  },
];

export const CORE_VALUES = [
  {
    title: 'Creativity',
    description: 'Bringing ideas to life.',
  },
  {
    title: 'Responsibility',
    description: 'Delivering quality work.',
  },
  {
    title: 'Continuous Learning',
    description: 'Always growing.',
  },
];

export const EXPERIENCE_HIGHLIGHTS = [
  'Responsive Layouts',
  'UI Systems',
  'Front-End Practice',
];
