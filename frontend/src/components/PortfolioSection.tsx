import { ExternalLink, Eye } from 'lucide-react';

const projects = [
  {
    title: 'Sample Gym Website',
    description: 'High-energy fitness website with class schedules, membership plans, and WhatsApp booking integration.',
    image: '/assets/generated/portfolio-gym.dim_600x400.png',
    tags: ['Fitness', 'Landing Page', 'WhatsApp CTA'],
    category: 'Gym & Fitness',
  },
  {
    title: 'Sample Lawyer Website',
    description: 'Professional legal services website with practice areas, consultation booking, and trust-building design.',
    image: '/assets/generated/portfolio-lawyer.dim_600x400.png',
    tags: ['Legal', 'Professional', 'Lead Gen'],
    category: 'Legal Services',
  },
  {
    title: 'Sample Coaching Website',
    description: 'Motivational coaching center website with course listings, testimonials, and enrollment CTAs.',
    image: '/assets/generated/portfolio-coaching.dim_600x400.png',
    tags: ['Education', 'Coaching', 'Enrollment'],
    category: 'Coaching Center',
  },
];

export default function PortfolioSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Sample{' '}
            <span className="text-gradient">Demo Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some sample designs I've created for different business types.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 card-glow"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Request Demo
                  </button>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium bg-primary/10 border border-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-2xl">
            <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Demo designs available on request.</span>{' '}
              Contact me to see a live preview tailored to your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
