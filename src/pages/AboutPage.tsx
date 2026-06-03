import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Counter } from "../components/ui/Counter";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import { aboutBlocks, impactStats, site, timeline } from "../data/content";
import { events } from "../data/events";
import { projects } from "../data/projects";

export default function AboutPage() {
  const heroImage = events[0]?.coverImage ?? projects[0]?.image;

  return (
    <PageTransition>
      <Seo
        title="About PRAKRITI"
        description="Learn about PRAKRITI's mission, vision, history, and environmental impact at NIT Durgapur."
        canonicalPath="/about"
        image={heroImage}
      />

      <section className="container-wide grid gap-10 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <SectionHeader
          eyebrow="About PRAKRITI"
          title="A student-led environmental collective with an engineering mind."
          description={site.description}
        />
        {heroImage ? (
          <Reveal className="relative overflow-hidden rounded-lg border border-white/10 shadow-soft image-gradient">
            <OptimizedImage src={heroImage} alt="PRAKRITI activity" className="aspect-[16/11] h-full w-full object-cover" eager />
          </Reveal>
        ) : null}
      </section>

      <section className="container-wide pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {aboutBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08} className="surface rounded-lg p-6">
              <h2 className="text-2xl font-black">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{block.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.035] py-20">
        <div className="container-wide">
          <SectionHeader
            level={2}
            eyebrow="Environmental Impact"
            title="Measured by action, continuity, and participation."
            description="PRAKRITI's public figures are kept intentionally clear: the club presents its verified activity scale without inflated impact claims."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {impactStats.map((stat) => (
              <Reveal key={stat.label} className="glass-panel rounded-lg p-8 text-center">
                <p className="text-6xl font-black text-prakriti-accent">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <h2 className="mt-3 text-base font-black uppercase text-white">{stat.label}</h2>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-narrow py-20">
        <SectionHeader
          level={2}
          eyebrow="Timeline"
          title="The story is still growing."
          description="A compact scroll narrative of the club's foundation, publishing milestone, and current direction."
        />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-prakriti-accent via-prakriti-primary to-transparent md:left-1/2" aria-hidden="true" />
          <div className="grid gap-8">
            {timeline.map((item, index) => (
              <Reveal key={item.title} className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className={index % 2 ? "md:col-start-2" : ""}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="ml-10 rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur md:ml-0"
                  >
                    <span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-prakriti-accent text-black md:left-[calc(50%-1rem)]">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-black uppercase text-prakriti-accent">{item.year}</p>
                    <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
