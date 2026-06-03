import { Handshake, Sparkles } from "lucide-react";
import { useState } from "react";
import { Modal } from "../components/ui/Modal";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import { sponsors } from "../data/sponsors";

type Sponsor = (typeof sponsors)[number];

export default function SponsorsPage() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  return (
    <PageTransition>
      <Seo
        title="Sponsors"
        description="Explore the PRAKRITI sponsor showcase featuring supplied sponsor logos including Fortune Park Pushpanjali, Subway, Pizza Hut, Orihant's Naturals, and more."
        canonicalPath="/sponsors"
        image={sponsors[0]?.logo}
      />

      <section className="container-wide py-20">
        <SectionHeader
          eyebrow="Sponsors"
          title="Partners presented with the care their logos deserve."
          description="This showcase uses only the supplied sponsor logo assets, arranged as a premium interactive partner wall."
        />
      </section>

      <section className="container-wide pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <Reveal key={sponsor.slug} delay={index * 0.05}>
              <button
                type="button"
                onClick={() => setSelectedSponsor(sponsor)}
                className="group flex min-h-64 w-full flex-col justify-between rounded-lg border border-white/10 bg-white/[0.055] p-5 text-left transition hover:-translate-y-1 hover:border-prakriti-accent/60 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.45] px-3 py-1 text-xs font-black uppercase text-prakriti-accent">
                    <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                    {sponsor.category}
                  </span>
                  <Handshake aria-hidden="true" className="h-5 w-5 text-white/50 transition group-hover:text-prakriti-accent" />
                </div>
                <div className="my-8 flex h-28 items-center justify-center rounded-lg bg-white p-5">
                  <OptimizedImage src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-full w-full object-contain" />
                </div>
                <h2 className="text-xl font-black">{sponsor.name}</h2>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Modal title={selectedSponsor?.name ?? "Sponsor"} open={Boolean(selectedSponsor)} onClose={() => setSelectedSponsor(null)}>
        {selectedSponsor ? (
          <div className="grid gap-6 md:grid-cols-[0.85fr_1fr] md:items-center">
            <div className="rounded-lg bg-white p-8">
              <OptimizedImage src={selectedSponsor.logo} alt={`${selectedSponsor.name} logo`} className="max-h-72 w-full object-contain" eager />
            </div>
            <div>
              <p className="text-sm font-black uppercase text-prakriti-accent">{selectedSponsor.category}</p>
              <h2 className="mt-2 text-3xl font-black">{selectedSponsor.name}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{selectedSponsor.description}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </PageTransition>
  );
}
