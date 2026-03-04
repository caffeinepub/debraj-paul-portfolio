import { ArrowRight, GraduationCap, MapPin } from "lucide-react";

export default function AboutSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-2xl border border-primary/20 opacity-60" />
              <div className="absolute -inset-8 rounded-3xl border border-primary/10 opacity-40" />

              {/* Profile image */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow">
                <img
                  src="/assets/my portfolio image-1.jpg"
                  alt="Debraj Paul - Web Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Available for Projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              About Me
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Debraj Paul</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a student web developer based in Assam. I help lawyers, gyms,
              coaching centers and small businesses build{" "}
              <span className="text-foreground font-medium">
                affordable, professional websites
              </span>{" "}
              that generate real client inquiries.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I understand the challenges local businesses face — that's why I
              offer fast delivery, transparent pricing, and direct support. No
              agencies, no middlemen. Just clean, effective websites that work.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "React",
                "Responsive Design",
                "SEO Basics",
                "WhatsApp Integration",
                "Fast Delivery",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-muted/50 border border-border rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Based in Assam, India</span>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-glow-sm hover:scale-105"
            >
              Request Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
