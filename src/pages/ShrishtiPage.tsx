import { BookOpen, FileText, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Modal } from "../components/ui/Modal";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { shrishti } from "../data/shrishti";

const categories = ["All", "Recent Issues", "Archive"] as const;

type Issue = (typeof shrishti.issues)[number];

export default function ShrishtiPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [pdfIssue, setPdfIssue] = useState<Issue | null>(null);

  const filteredIssues = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return shrishti.issues.filter((issue) => {
      const inCategory = category === "All" || issue.category === category;
      const inSearch =
        !normalizedQuery ||
        [issue.title, issue.category, issue.issue ? `issue ${issue.issue}` : ""]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      return inCategory && inSearch;
    });
  }, [category, query]);

  const featured = shrishti.issues.slice(0, 3);
  const heroIssue = shrishti.issues[0];

  return (
    <PageTransition>
      <Seo
        title="SHRISHTI"
        description="SHRISHTI is the official environmental journal of PRAKRITI, launched in October 2020."
        canonicalPath="/shrishti"
        image={heroIssue?.coverImage}
      />

      <section className="relative overflow-hidden bg-[#07100A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.16),transparent_30rem),radial-gradient(circle_at_88%_12%,rgba(56,189,248,0.12),transparent_24rem)]" aria-hidden="true" />
        <div className="container-wide relative grid min-h-[calc(100vh-4rem)] gap-10 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-prakriti-accent/[0.35] bg-prakriti-accent/[0.12] px-4 py-2 text-sm font-black text-prakriti-accent">
              <BookOpen aria-hidden="true" className="h-4 w-4" />
              {shrishti.launch}
            </p>
            <h1 className="text-balance text-6xl font-black leading-none md:text-8xl">{shrishti.title}</h1>
            <p className="mt-5 text-2xl font-black text-prakriti-accent md:text-4xl">{shrishti.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">{shrishti.description}</p>
          </div>
          {heroIssue ? (
            <Reveal className="mx-auto w-full max-w-md">
              <button
                type="button"
                aria-label={`Open ${heroIssue.title}`}
                onClick={() => setSelectedIssue(heroIssue)}
                className="group relative block w-full overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.08] p-3 shadow-soft"
              >
                <OptimizedImage src={heroIssue.coverImage} alt={heroIssue.title} className="aspect-[3/4] h-full w-full rounded-md object-cover transition duration-700 group-hover:scale-[1.02]" eager />
              </button>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prakriti-accent text-black">
            <Sparkles aria-hidden="true" className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-black">Featured Stories</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((issue, index) => (
            <Reveal key={issue.slug} delay={index * 0.06}>
              <button
                type="button"
                aria-label={`Open ${issue.title}`}
                onClick={() => setSelectedIssue(issue)}
                className="group h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] text-left transition hover:-translate-y-1 hover:border-prakriti-accent/60"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <OptimizedImage src={issue.coverImage} alt={issue.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.76] via-black/[0.08] to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase text-prakriti-accent">{issue.category}</p>
                  <h3 className="mt-2 text-2xl font-black">{issue.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">Official SHRISHTI archive entry from PRAKRITI's environmental journal collection.</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.035] py-20">
        <div className="container-wide">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-prakriti-accent">Magazine Archive</p>
              <h2 className="mt-2 text-4xl font-black">Search the SHRISHTI cover library.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="relative" htmlFor="shrishti-search">
                <span className="sr-only">Search SHRISHTI archive</span>
                <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                <input
                  id="shrishti-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by issue or category"
                  className="h-12 w-full rounded-full border border-white/10 bg-black/[0.35] pl-12 pr-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/40 focus:border-prakriti-accent"
                />
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1 fine-scrollbar" aria-label="SHRISHTI category filters">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    className={[
                      "inline-flex min-h-12 shrink-0 items-center rounded-full border px-4 py-2 text-sm font-black transition",
                      category === item
                        ? "border-prakriti-accent bg-prakriti-accent text-black"
                        : "border-white/[0.12] bg-white/[0.06] text-white/70 hover:bg-white/10"
                    ].join(" ")}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredIssues.map((issue, index) => (
              <Reveal key={issue.slug} delay={Math.min(index * 0.04, 0.2)}>
                <article className="overflow-hidden rounded-lg border border-white/10 bg-black/[0.24]">
                  <button type="button" aria-label={`Open ${issue.title}`} onClick={() => setSelectedIssue(issue)} className="group block w-full text-left">
                    <OptimizedImage src={issue.coverImage} alt={issue.title} className="aspect-[3/4] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </button>
                  <div className="p-4">
                    <p className="text-xs font-black uppercase text-prakriti-accent">{issue.category}</p>
                    <h3 className="mt-2 text-xl font-black">{issue.title}</h3>
                    {issue.pdfUrl ? (
                      <button
                        type="button"
                        onClick={() => setPdfIssue(issue)}
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-black text-white transition hover:border-prakriti-accent/60 hover:text-prakriti-accent"
                      >
                        <FileText aria-hidden="true" className="h-4 w-4" />
                        Open PDF
                      </button>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Modal title={selectedIssue?.title ?? "SHRISHTI issue"} open={Boolean(selectedIssue)} onClose={() => setSelectedIssue(null)}>
        {selectedIssue ? (
          <div className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
            <OptimizedImage src={selectedIssue.coverImage} alt={selectedIssue.title} className="max-h-[72vh] w-full rounded-lg object-contain" eager />
            <div>
              <p className="text-sm font-black uppercase text-prakriti-accent">{selectedIssue.category}</p>
              <h2 className="mt-2 text-3xl font-black">{selectedIssue.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Archive cover from SHRISHTI, the official environmental journal of PRAKRITI.
              </p>
              {selectedIssue.pdfUrl ? (
                <button
                  type="button"
                  onClick={() => setPdfIssue(selectedIssue)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-prakriti-accent bg-prakriti-accent px-4 py-2 text-sm font-black text-black"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  Open PDF
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>

      <Modal title={pdfIssue?.title ?? "PDF viewer"} open={Boolean(pdfIssue)} onClose={() => setPdfIssue(null)}>
        {pdfIssue?.pdfUrl ? (
          <iframe title={`${pdfIssue.title} PDF`} src={pdfIssue.pdfUrl} className="h-[72vh] w-full rounded-lg border border-white/10 bg-white" />
        ) : null}
      </Modal>
    </PageTransition>
  );
}
