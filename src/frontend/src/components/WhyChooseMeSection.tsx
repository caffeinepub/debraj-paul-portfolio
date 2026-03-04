import {
  Clock,
  IndianRupee,
  MessageCircle,
  Palette,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "48 Hour Delivery",
    description:
      "Your website will be ready within 48 hours of project confirmation. Fast, reliable, and on time.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: IndianRupee,
    title: "Affordable Student Pricing",
    description:
      "Professional quality at student-friendly prices. Starting from just ₹2,500 — no compromise on quality.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Palette,
    title: "Modern Clean Design",
    description:
      "Every website is crafted with a clean, modern aesthetic that builds trust and impresses visitors.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Support",
    description:
      "No tickets, no waiting. Reach me directly on WhatsApp for quick updates and support.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Charges",
    description:
      "The price you see is the price you pay. Transparent, honest, and straightforward — always.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

export default function WhyChooseMeSection() {
  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, oklch(0.62 0.18 230) 0%, transparent 50%), radial-gradient(circle at 75% 50%, oklch(0.75 0.15 200) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Why Choose Me
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            The <span className="text-gradient">Debraj Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's why local businesses in Assam trust me to build their online
            presence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative p-6 rounded-2xl bg-card border ${benefit.border} hover:border-primary/40 transition-all duration-300 card-glow ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Number */}
                <div className="absolute top-4 right-4 font-heading font-black text-5xl text-muted/20 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${benefit.bg} border ${benefit.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${benefit.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/10 border border-primary/30 text-center">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
            Ready to grow your business online?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's build something great together. Get your free demo today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-glow-sm hover:scale-105"
            >
              Request Free Demo
            </button>
            <a
              href="https://wa.me/918730818101"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-semibold rounded-xl hover:border-primary/40 hover:bg-muted/30 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
