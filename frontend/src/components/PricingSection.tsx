import { Check, MessageCircle, Zap } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/918730818101';

const plans = [
  {
    name: 'Basic',
    price: '₹2,500',
    description: 'Perfect for getting started online',
    popular: false,
    features: [
      '3-5 Page Website',
      'Mobile Responsive Design',
      'Contact Form',
      'WhatsApp Button',
      'Basic SEO Setup',
      '48 Hour Delivery',
      '1 Revision Round',
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
  },
  {
    name: 'Standard',
    price: '₹3,500',
    description: 'Most popular for local businesses',
    popular: true,
    features: [
      '5-7 Page Website',
      'Mobile Responsive Design',
      'Contact & Inquiry Form',
      'WhatsApp & Call Integration',
      'Google Maps Integration',
      'On-Page SEO Setup',
      '48 Hour Delivery',
      '3 Revision Rounds',
      'Social Media Links',
    ],
    cta: 'Get Started',
    ctaStyle: 'primary',
  },
  {
    name: 'Premium',
    price: '₹5,000',
    description: 'Complete solution for serious businesses',
    popular: false,
    features: [
      '7-10 Page Website',
      'Mobile Responsive Design',
      'Advanced Contact Forms',
      'WhatsApp & Call Integration',
      'Google Maps & Reviews',
      'Full SEO Optimization',
      '48 Hour Delivery',
      'Unlimited Revisions',
      'Social Media Integration',
      'Photo Gallery / Portfolio',
      '1 Month Free Support',
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
  },
];

export default function PricingSection() {
  return (
    <div className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Transparent Pricing
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Affordable Plans for{' '}
            <span className="text-gradient">Every Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No hidden charges. No surprises. Just honest pricing for quality work.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-primary/10 border-primary/50 shadow-glow scale-105'
                  : 'bg-card border-border hover:border-primary/30 card-glow'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                    <Zap className="w-3 h-3 fill-white" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan name & price */}
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-black text-4xl text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">/ project</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-primary/20' : 'bg-muted/50'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`${WHATSAPP_URL}?text=Hi Debraj, I'm interested in the ${plan.name} plan (${plan.price}). Can we discuss?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-sm'
                      : 'bg-muted/50 border border-border text-foreground hover:bg-muted hover:border-primary/40'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta} on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          All prices are one-time payments. No monthly fees. No hidden charges.
        </p>
      </div>
    </div>
  );
}
