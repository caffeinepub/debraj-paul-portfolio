import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          Contact
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          Get in Touch <span className="text-gradient">Today</span>
        </h2>

        {/* Subheading */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-12">
          Call or WhatsApp us directly for quick response.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Call Now */}
          <a
            href="tel:+918730818101"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-full bg-gray-900 text-white font-semibold text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 min-w-[220px]"
          >
            <Phone className="w-6 h-6 flex-shrink-0" />
            Call Now
          </a>

          {/* Chat on WhatsApp */}
          <a
            href="https://wa.me/918730818101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-full bg-whatsapp text-white font-semibold text-lg shadow-lg hover:opacity-90 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 min-w-[220px]"
          >
            <SiWhatsapp className="w-6 h-6 flex-shrink-0" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
