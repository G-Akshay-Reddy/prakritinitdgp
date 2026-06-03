import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../components/ui/Modal";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { events } from "../data/events";
import NotFoundPage from "./NotFoundPage";

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  if (!event) return <NotFoundPage />;

  const hero = event.coverImage;

  return (
    <PageTransition>
      <Seo title={event.title} description={event.summary} canonicalPath={`/events/${event.slug}`} image={hero} />

      <section className="container-wide py-10">
        <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/70 transition hover:text-prakriti-accent">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Events
        </Link>
      </section>

      <section className="container-wide grid gap-10 pb-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase text-prakriti-accent">{event.kicker}</p>
          <h1 className="text-balance text-5xl font-black leading-tight md:text-7xl">{event.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/70">{event.description}</p>
        </div>
        {hero ? (
          <div className="relative overflow-hidden rounded-lg border border-white/10 image-gradient">
            <OptimizedImage src={hero} alt={event.title} className="aspect-[16/11] h-full w-full object-cover" eager />
          </div>
        ) : null}
      </section>

      <section className="bg-white/[0.035] py-20">
        <div className="container-wide grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black">Impact</h2>
            <p className="mt-3 text-sm leading-7 text-white/60">Qualitative impact drawn from the event's actual format and documented PRAKRITI activity.</p>
          </div>
          <div className="grid gap-3">
            {event.impact.map((impact, index) => (
              <Reveal key={impact} delay={index * 0.05} className="rounded-lg border border-white/10 bg-black/[0.28] p-5">
                <p className="text-base leading-7 text-white/75">{impact}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prakriti-primary">
            <ImageIcon aria-hidden="true" className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-black">Photo Gallery</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {event.gallery.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage({ src: image, title: `${event.title} gallery` })}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] text-left transition hover:border-prakriti-accent/60"
            >
              <OptimizedImage src={image} alt={`${event.title} gallery`} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </section>

      <Modal title={selectedImage?.title ?? event.title} open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
        {selectedImage ? <OptimizedImage src={selectedImage.src} alt={selectedImage.title} className="max-h-[70vh] w-full rounded-lg object-contain" eager /> : null}
      </Modal>
    </PageTransition>
  );
}
