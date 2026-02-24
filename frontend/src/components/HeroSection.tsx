import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/918730818101';

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(oklch(0.62 0.18 230 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.18 230 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.62 0.18 230)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl"
        style={{ background: 'oklch(0.75 0.15 200)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-8 animate-fade-up">
          <Zap className="w-4 h-4 fill-amber-400" />
          Limited Projects Taken Each Month
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up">
          Professional Business{' '}
          <span className="text-gradient">Websites</span>
          <br />
          in{' '}
          <span className="relative inline-block">
            <span className="text-gradient">48 Hours</span>
            <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, oklch(0.62 0.18 230), oklch(0.75 0.15 200))' }} />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up">
          I help local businesses get more clients with{' '}
          <span className="text-foreground font-medium">modern, mobile-optimized websites.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-glow hover:shadow-glow hover:scale-105"
          >
            Get Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-whatsapp text-white font-semibold text-lg rounded-xl hover:bg-whatsapp/90 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up">
          {[
            { value: '48hrs', label: 'Delivery Time' },
            { value: '₹2,500', label: 'Starting Price' },
            { value: '100%', label: 'Mobile Optimized' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-heading font-bold text-2xl text-foreground">{stat.value}</span>
              <span className="text-xs uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
