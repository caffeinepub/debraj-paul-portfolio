import { Globe, Layers, RefreshCw, MessageCircle, Search } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Website Design',
    description: 'Professional, modern websites tailored to your business needs and brand identity.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Layers,
    title: 'Landing Pages',
    description: 'High-converting single-page designs focused on capturing leads and driving action.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, mobile-friendly experience.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Call Integration',
    description: 'Direct inquiry buttons so clients can reach you instantly via WhatsApp or phone.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: Search,
    title: 'Basic SEO Setup',
    description: 'On-page SEO optimization to help your business get found on Google locally.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

export default function ServicesSection() {
  return (
    <div className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            What I Offer
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Services Built for{' '}
            <span className="text-gradient">Local Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to establish a strong online presence and start getting more clients.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-6 rounded-2xl bg-card border ${service.border} hover:border-primary/40 transition-all duration-300 card-glow cursor-default`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.bg} border ${service.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="group relative p-6 rounded-2xl bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all duration-300 flex flex-col items-center justify-center text-center card-glow cursor-default">
            <div className="font-heading font-bold text-xl text-foreground mb-2">
              Need Something Custom?
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Let's discuss your specific requirements.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
