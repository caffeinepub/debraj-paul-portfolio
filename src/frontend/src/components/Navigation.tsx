import { useQueryClient } from "@tanstack/react-query";
import { Code2, LogIn, LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Me", href: "#why-choose-me" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: any) {
        if (error.message === "User is already authenticated") {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? "bg-background/90 border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              Debraj<span className="text-primary"> Paul</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="ml-3 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-glow-sm"
            >
              Get Free Demo
            </button>

            {/* Internet Identity login/logout — kept for admin backend auth */}
            <button
              type="button"
              onClick={handleAuth}
              disabled={isLoggingIn}
              className={`ml-2 flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-50 ${
                isAuthenticated
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              title={isAuthenticated ? "Logout" : "Admin Login"}
            >
              {isLoggingIn ? (
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : isAuthenticated ? (
                <LogOut className="w-4 h-4" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              <span className="hidden lg:inline">
                {isLoggingIn
                  ? "Logging in…"
                  : isAuthenticated
                    ? "Logout"
                    : "Admin"}
              </span>
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 nav-blur border-b border-border">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-2 w-full px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Free Demo
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleAuth();
              }}
              disabled={isLoggingIn}
              className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoggingIn ? (
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : isAuthenticated ? (
                <LogOut className="w-4 h-4" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              {isLoggingIn
                ? "Logging in…"
                : isAuthenticated
                  ? "Logout"
                  : "Admin Login"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
