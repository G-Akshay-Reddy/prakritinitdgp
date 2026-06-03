import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { LenisProvider } from "./components/layout/LenisProvider";
import { ScrollToTop } from "./components/layout/ScrollToTop";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const EventDetailPage = lazy(() => import("./pages/EventDetailPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ShrishtiPage = lazy(() => import("./pages/ShrishtiPage"));
const SponsorsPage = lazy(() => import("./pages/SponsorsPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));

function RouteLoader() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-16" aria-live="polite" aria-busy="true">
      <div className="h-12 w-12 rounded-full border-2 border-white/15 border-t-prakriti-accent animate-spin" />
      <span className="sr-only">Loading page</span>
    </main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <LenisProvider>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="page-shell">
        <div className="site-grid" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <Header />
        <AnimatePresence mode="wait">
          <Suspense fallback={<RouteLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:slug" element={<EventDetailPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/shrishti" element={<ShrishtiPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </div>
    </LenisProvider>
  );
}
