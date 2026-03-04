import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseMeSection from "./components/WhyChooseMeSection";
import AdminPage from "./pages/AdminPage";

// Root layout — Navigation is only shown on the public site
function RootLayout() {
  return <Outlet />;
}

// Public site page
function PublicSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="why-choose-me">
          <WhyChooseMeSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// Route definitions
const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PublicSite,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
