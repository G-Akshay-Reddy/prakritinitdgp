import { FlaskConical, Layers, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Seo
        title="Projects"
        description="Explore PRAKRITI projects including Mini Composting, Aquaponics, Clay Incinerator, Mini Water Cooler, and Thermoelectric Phone Charger."
        canonicalPath="/projects"
        image={projects[0]?.image}
      />

      <section className="container-wide py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Green engineering prototypes from the PRAKRITI archive."
          description="Every project page includes overview, objective, methodology, impact, and supplied project media."
        />
      </section>

      <section className="container-wide pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link to={`/projects/${project.slug}`} className="group block h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] transition hover:-translate-y-1 hover:border-prakriti-accent/60">
                <div className="relative aspect-[16/11] overflow-hidden">
                  {project.image ? (
                    <OptimizedImage src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.82] via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/[0.64] px-3 py-1 text-xs font-black uppercase text-prakriti-accent backdrop-blur">
                    <FlaskConical aria-hidden="true" className="h-3.5 w-3.5" />
                    {project.type}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-black">{project.title}</h2>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-white/70">{project.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.035] py-20">
        <div className="container-wide grid gap-4 md:grid-cols-3">
          {[
            { title: "Overview", body: "Every entry starts with what the project demonstrates.", icon: Layers },
            { title: "Methodology", body: "Build logic is explained clearly without hiding the system.", icon: FlaskConical },
            { title: "Impact", body: "Impact is framed through verified project purpose and use.", icon: Recycle }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06} className="rounded-lg border border-white/10 bg-black/[0.24] p-6">
                <Icon aria-hidden="true" className="h-7 w-7 text-prakriti-accent" />
                <h2 className="mt-6 text-2xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
