import { gsap } from "gsap";
import { ArrowDown, BookOpen, Compass, Leaf, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AceternityGlobe } from "../components/three/AceternityGlobe";
import { Counter } from "../components/ui/Counter";
import { HeroSpotlight } from "../components/ui/HeroSpotlight";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { PrimaryLink } from "../components/ui/PrimaryLink";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import { impactStats, site } from "../data/content";
import { events } from "../data/events";
import { projects } from "../data/projects";
import { shrishti } from "../data/shrishti";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.to("[data-scroll-cue]", {
        y: 7,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  const featuredEvents = events.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const latestIssue = shrishti.issues[0];

  return (
    <PageTransition>
      <Seo
        title="PRAKRITI | The Techno Environmental Club of NIT Durgapur"
        description="An immersive environmental-tech website for PRAKRITI, the Techno Environmental Club of NIT Durgapur."
        canonicalPath="/"
        image={site.logo ?? latestIssue?.coverImage}
      />

      <section ref={heroRef} className="hero-section relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <HeroSpotlight targetRef={heroRef} />
        <div className="container-wide relative z-10 grid min-h-[calc(100vh-4rem)] items-center py-20 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="max-w-3xl">
            <p data-hero className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.08] px-4 py-2 text-sm font-bold text-prakriti-accent backdrop-blur">
              <Leaf aria-hidden="true" className="h-4 w-4" />
              {site.subtitle}
            </p>
            <h1 data-hero className="text-balance text-5xl font-black leading-none text-white sm:text-7xl md:text-8xl">
              PRAKRITI
            </h1>
            <p data-hero className="text-balance mt-5 max-w-[21rem] text-xl font-black leading-tight text-prakriti-accent sm:max-w-sm sm:text-2xl md:max-w-2xl md:text-4xl">
              {site.tagline}
            </p>
            <p data-hero className="mt-6 max-w-[21rem] text-base leading-8 text-white/70 sm:max-w-sm md:max-w-2xl md:text-lg">
              Sustainability, environmental awareness, and modern engineering brought together through campus action, green projects, and interactive storytelling.
            </p>
            <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/about">
                <Compass aria-hidden="true" className="h-4 w-4" />
                Explore Journey
              </PrimaryLink>
              <PrimaryLink to="/shrishti" variant="ghost">
                <BookOpen aria-hidden="true" className="h-4 w-4" />
                Read SHRISHTI
              </PrimaryLink>
            </div>
          </div>
          <div className="hero-globe-wrap relative mt-10 h-[min(74vw,33rem)] min-h-[22rem] w-full lg:mt-0 lg:h-[min(51vw,42rem)] lg:min-h-[34rem] lg:translate-x-[7%]">
            <AceternityGlobe />
          </div>
        </div>
        <a
          href="#impact"
          data-scroll-cue
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-bold text-white/70 backdrop-blur transition hover:text-prakriti-accent md:inline-flex"
        >
          Scroll
          <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </a>
      </section>

      <section id="impact" className="container-wide py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {impactStats.map((stat) => (
            <Reveal key={stat.label} className="glass-panel rounded-lg p-7">
              <p className="text-5xl font-black text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-bold uppercase text-prakriti-accent">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionHeader
          level={2}
          eyebrow="Nature Meets Future"
          title="A club experience built like an environmental technology lab."
          description="PRAKRITI's work spans awareness, outreach, student-built systems, and publishing. This site presents those layers as a connected digital ecosystem."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Events", body: "Campus participation, awareness drives, outreach, and student-led environmental storytelling.", to: "/events", icon: Sparkles },
            { title: "Projects", body: "Hands-on green engineering prototypes that make sustainability visible and testable.", to: "/projects", icon: Leaf },
            { title: "SHRISHTI", body: "The official environmental journal of PRAKRITI, launched in October 2020.", to: "/shrishti", icon: BookOpen }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08} className="surface rounded-lg p-6 transition hover:-translate-y-1 hover:border-prakriti-accent/50 hover:bg-white/[0.08]">
                <Icon aria-hidden="true" className="mb-8 h-7 w-7 text-prakriti-accent" />
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-3 min-h-24 text-sm leading-7 text-white/70">{item.body}</p>
                <Link className="mt-5 inline-flex text-sm font-black text-prakriti-accent transition hover:text-white" to={item.to}>
                  Open {item.title}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            level={2}
            eyebrow="Field Notes"
            title="Events that make ecological action visible."
            description="Every event card uses the supplied PRAKRITI archive imagery and opens into a detailed storytelling page."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <Reveal key={event.slug} delay={index * 0.08}>
                <Link to={`/events/${event.slug}`} className="group block overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {event.coverImage ? (
                      <OptimizedImage src={event.coverImage} alt={event.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.78] via-black/[0.08] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-xs font-black uppercase text-prakriti-accent">{event.kicker}</p>
                      <h2 className="mt-1 text-xl font-black">{event.title}</h2>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-panel rounded-lg p-6">
            <SectionHeader
              level={2}
              eyebrow="Green Engineering"
              title="Projects shaped for learning, testing, and impact."
              description="The project archive presents composting, aquaponics, sanitation, cooling, and energy prototypes through actual project media."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.slug} to={`/projects/${project.slug}`} className="rounded-lg border border-white/10 bg-black/[0.35] p-4 transition hover:border-prakriti-accent/60">
                  <p className="text-xs font-black uppercase text-prakriti-accent">{project.type}</p>
                  <h2 className="mt-2 text-lg font-black">{project.title}</h2>
                </Link>
              ))}
            </div>
          </Reveal>

          {latestIssue ? (
            <Reveal className="surface overflow-hidden rounded-lg">
              <Link to="/shrishti" className="group grid md:grid-cols-[0.72fr_1fr] lg:grid-cols-1">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <OptimizedImage src={latestIssue.coverImage} alt={latestIssue.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-black uppercase text-prakriti-accent">Latest From SHRISHTI</p>
                  <h2 className="mt-2 text-3xl font-black">{latestIssue.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/70">{shrishti.description}</p>
                </div>
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>
    </PageTransition>
  );
}
