import { Camera, Grid3X3 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../components/ui/Modal";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import { events } from "../data/events";


export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const visibleEvents = events;
  

  const gallery = visibleEvents.flatMap((event) => event.gallery.map((image) => ({ image, event })));

  return (
    <PageTransition>
      <Seo
        title="Events"
        description="Explore PRAKRITI events including Plantation Drive, RUNIT, Village Trip, Earth Hour, Green Diwali, and more."
        canonicalPath="/events"
        image={events[0]?.coverImage}
      />

      <section className="container-wide py-20">
        <SectionHeader
          eyebrow="Events"
          title="Environmental awareness, designed as participation."
          description="PRAKRITI's event archive combines campus action, outreach, cultural moments, public communication, and visual storytelling."
        />

      </section>

      <section className="container-wide pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleEvents.map((event, index) => (
            <Reveal key={event.slug} delay={index * 0.05}>
              <Link to={`/events/${event.slug}`} className="group block overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {event.coverImage ? (
                    <OptimizedImage src={event.coverImage} alt={event.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/[0.12] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-black uppercase text-prakriti-accent">{event.kicker}</p>
                    <h2 className="mt-1 text-3xl font-black">{event.title}</h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-7 text-white/70">{event.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prakriti-primary">
            <Grid3X3 aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-2xl font-black">Interactive Gallery</h2>
            <p className="text-sm text-white/60">Open any supplied event image for a closer look.</p>
          </div>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map(({ image, event }) => (
            <button
              key={`${event.slug}-${image}`}
              type="button"
              onClick={() => setSelectedImage({ src: image, title: `${event.title} gallery image` })}
              className="group mb-4 block w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] text-left transition hover:border-prakriti-accent/60"
            >
              <div className="relative">
                <OptimizedImage src={image} alt={`${event.title} gallery image`} className="w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  <Camera aria-hidden="true" className="h-3.5 w-3.5" />
                  {event.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Modal title={selectedImage?.title ?? "Event image"} open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
        {selectedImage ? (
          <OptimizedImage src={selectedImage.src} alt={selectedImage.title} className="max-h-[70vh] w-full rounded-lg object-contain" eager />
        ) : null}
      </Modal>
    </PageTransition>
  );
}
