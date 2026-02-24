import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useSubmitInquiry } from '../hooks/useQueries';

const businessTypes = [
  'Gym / Fitness Center',
  'Law Firm / Lawyer',
  'Coaching Center',
  'Clinic / Hospital',
  'Restaurant / Cafe',
  'Retail Shop',
  'Real Estate',
  'Other Business',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (!form.businessType) newErrors.businessType = 'Please select your business type';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitInquiry(
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        businessType: form.businessType,
        message: form.message.trim(),
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: '', phone: '', businessType: '', message: '' });
        },
        onError: () => {
          setErrors({ submit: 'Something went wrong. Please try again or contact via WhatsApp.' });
        },
      }
    );
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Let's Build Your{' '}
            <span className="text-gradient">Dream Website</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you within a few hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    Thank you for reaching out! I'll get back to you within a few hours. You can also reach me directly on WhatsApp.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://wa.me/918730818101"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-colors"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.name ? 'border-red-400/60' : 'border-border focus:border-primary/50'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.phone ? 'border-red-400/60' : 'border-border focus:border-primary/50'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Business Type <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={form.businessType}
                      onChange={(e) => handleChange('businessType', e.target.value)}
                      className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer ${
                        errors.businessType ? 'border-red-400/60' : 'border-border focus:border-primary/50'
                      } ${!form.businessType ? 'text-muted-foreground' : ''}`}
                    >
                      <option value="" disabled>Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type} className="bg-card text-foreground">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.businessType && <p className="mt-1 text-xs text-red-400">{errors.businessType}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell me about your business and what you need..."
                      rows={4}
                      className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${
                        errors.message ? 'border-red-400/60' : 'border-border focus:border-primary/50'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {errors.submit && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                      {errors.submit}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] shadow-glow-sm"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="tel:+918730818101"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Call</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      +91 87308 18101
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918730818101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
                    <MessageCircle className="w-5 h-5" style={{ color: '#25D366' }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      +91 87308 18101
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:belipaul4567@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-400/20 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors break-all">
                      belipaul4567@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-foreground font-medium">Assam, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/918730818101?text=Hi Debraj, I'd like to discuss a website project!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 rounded-2xl text-white font-semibold text-lg hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp Now
            </a>

            {/* Response time note */}
            <div className="bg-card border border-border rounded-2xl p-5 text-center">
              <div className="w-8 h-8 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Usually responds within 2-3 hours</span>
                <br />
                Available Mon–Sat, 9 AM – 8 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
