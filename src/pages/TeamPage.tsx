import { Award, GraduationCap, Search, SlidersHorizontal, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { Modal } from "../components/ui/Modal";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import {
  academicYears,
  alumni,
  classOf2027,
  classOf2028,
  classOf2029,
  dignitaries,
  postBearers,
  type TeamPerson
} from "../data/team";

type TeamFilter = "All" | "Dignitaries" | "Post Bearers" | "Fourth Years" | "Third Years" | "Second Years" |  "Alumni";

type SelectedProfile = {
  person: TeamPerson;
  sectionLabel: string;
};

const filterOptions: TeamFilter[] = ["All", "Dignitaries", "Post Bearers", "Fourth Years", "Third Years", "Second Years", "Alumni"];

const studentBatches = [classOf2027, classOf2028, classOf2029];
const allStudents = studentBatches.flat();

const memberYearDefinitions: Array<{ filter: TeamFilter; title: string; classYear: number }> = [
  { filter: "Fourth Years", title: "Fourth Years", classYear: academicYears.fourthYear },
  { filter: "Third Years", title: "Third Years", classYear: academicYears.thirdYear },
  { filter: "Second Years", title: "Second Years", classYear: academicYears.secondYear },
];

function profileKey(person: TeamPerson, sectionLabel: string, index: number) {
  return `${sectionLabel}-${person.classYear ?? "staff"}-${person.name}-${index}`;
}

function peopleForClassYear(classYear: number) {
  return allStudents.filter((person) => person.classYear === classYear);
}

function matchesSearch(person: TeamPerson, sectionLabel: string, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return true;

  return [person.name, person.role, person.section, sectionLabel, person.classYear ? `Class of ${person.classYear}` : ""]
    .join(" ")
    .toLowerCase()
    .includes(normalizedQuery);
}

function groupAlumniByClass(currentAcademicYears: number[]) {
  const currentYears = new Set(currentAcademicYears);
  const graduatedStudents = allStudents.filter((person) => person.classYear && !currentYears.has(person.classYear));
  const grouped = new Map<number, TeamPerson[]>();

  [...graduatedStudents, ...alumni].forEach((person) => {
    if (!person.classYear) return;

    const batch = grouped.get(person.classYear) ?? [];
    batch.push(person);
    grouped.set(person.classYear, batch);
  });

  return Array.from(grouped.entries())
    .sort(([yearA], [yearB]) => yearB - yearA)
    .map(([classYear, people]) => ({ classYear, people }));
}

function PersonCard({
  person,
  sectionLabel,
  onOpen,
  variant = "standard"
}: {
  person: TeamPerson;
  sectionLabel: string;
  onOpen: (profile: SelectedProfile) => void;
  variant?: "standard" | "featured";
}) {
  const isFeatured = variant === "featured";

  return (
    <button
      type="button"
      onClick={() => onOpen({ person, sectionLabel })}
      className={[
        "group block h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] text-left transition hover:-translate-y-1 hover:border-prakriti-accent/60 hover:bg-white/[0.08]",
        isFeatured ? "shadow-soft" : ""
      ].join(" ")}
      aria-label={`View ${person.name}`}
    >
      <div className={["relative overflow-hidden rounded-2xl","aspect-square"].join(" ")}>
        <OptimizedImage src={person.image} alt={person.name} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.8] via-black/[0.08] to-transparent opacity-90" />
        <div className={["absolute inset-x-0 bottom-0", isFeatured ? "p-5" : "p-4"].join(" ")}>
          <p className="text-xs font-black uppercase text-prakriti-accent">{person.role}</p>
          <h3 className={["mt-1 font-black leading-tight", isFeatured ? "text-2xl" : "text-lg"].join(" ")}>{person.name}</h3>
        </div>
      </div>
      <div className={["flex items-center justify-between gap-3 text-xs text-white/60", isFeatured ? "px-5 py-4" : "px-4 py-3"].join(" ")}>
        <span>{sectionLabel}</span>
        {person.classYear ? <span>Class of {person.classYear}</span> : null}
      </div>
    </button>
  );
}

function SectionTitle({
  icon,
  title,
  kicker,
  count
}: {
  icon: "award" | "graduation" | "users";
  title: string;
  kicker?: string;
  count?: number;
}) {
  const Icon = icon === "award" ? Award : icon === "graduation" ? GraduationCap : Users;

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prakriti-accent text-black">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-black uppercase text-prakriti-accent">{kicker}</p>
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
        </div>
      </div>
      {typeof count === "number" ? <p className="text-sm font-semibold text-white/55">{count} profiles</p> : null}
    </div>
  );
}

export default function TeamPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<TeamFilter>("All");
  const [selectedProfile, setSelectedProfile] = useState<SelectedProfile | null>(null);

  const currentAcademicYears = useMemo(() => Object.values(academicYears), []);
  const activeMemberSections = useMemo(
    () =>
      memberYearDefinitions.map((definition) => ({
        ...definition,
        people: peopleForClassYear(definition.classYear).filter((person) => matchesSearch(person, definition.filter, query))
      })),
    [query]
  );
  const alumniGroups = useMemo(
    () =>
      groupAlumniByClass(currentAcademicYears)
        .map((group) => ({
          ...group,
          people: group.people.filter((person) => matchesSearch(person, "Alumni", query))
        }))
        .filter((group) => group.people.length > 0),
    [currentAcademicYears, query]
  );

  const filteredDignitaries = useMemo(() => dignitaries.filter((person) => matchesSearch(person, "Dignitaries", query)), [query]);
  const filteredPostBearers = useMemo(() => postBearers.filter((person) => matchesSearch(person, "Post Bearers", query)), [query]);

  const visibleMemberSections = activeMemberSections.filter((section) => (filter === "All" || filter === section.filter) && section.people.length > 0);
  const showDignitaries = (filter === "All" || filter === "Dignitaries") && filteredDignitaries.length > 0;
  const showPostBearers = (filter === "All" || filter === "Post Bearers") && filteredPostBearers.length > 0;
  const showMembers = filter === "All" || ["Fourth Years", "Third Years", "Second Years"].includes(filter);
  const showAlumni = (filter === "All" || filter === "Alumni") && alumniGroups.length > 0;
  const visibleCount =
    (showDignitaries ? filteredDignitaries.length : 0) +
    (showPostBearers ? filteredPostBearers.length : 0) +
    (showMembers ? visibleMemberSections.reduce((total, section) => total + section.people.length, 0) : 0) +
    (showAlumni ? alumniGroups.reduce((total, group) => total + group.people.length, 0) : 0);

  return (
    <PageTransition>
      <Seo
        title="Team"
        description="Meet the PRAKRITI dignitaries, post bearers, student members, and alumni."
        canonicalPath="/team"
        image={dignitaries[0]?.image}
      />

      <section className="container-wide py-20">
        <SectionHeader
          eyebrow="Team"
          title="The people behind PRAKRITI's environmental ecosystem."
          description="The team directory is organized by dignitaries, post bearers, academic-year members, and alumni batches."
        />
      </section>

      <section className="container-wide pb-12">
        <div className="sticky top-16 z-20 rounded-lg border border-white/10 bg-black/80 p-4 backdrop-blur-2xl">
          <div className="grid min-w-0 gap-4 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
            <label className="relative block min-w-0" htmlFor="team-search">
              <span className="sr-only">Search team members</span>
              <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
              <input
                id="team-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, role, or year"
                className="h-12 w-full rounded-full border border-white/10 bg-white/[0.08] pl-12 pr-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/40 focus:border-prakriti-accent"
              />
            </label>
            <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 fine-scrollbar lg:flex-wrap lg:overflow-visible" aria-label="Team filters">
              {filterOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                  className={[
                    "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-black uppercase transition",
                    filter === item
                      ? "border-prakriti-accent bg-prakriti-accent text-black"
                      : "border-white/[0.12] bg-white/[0.06] text-white/70 hover:bg-white/10"
                  ].join(" ")}
                >
                  <SlidersHorizontal aria-hidden="true" className="h-3.5 w-3.5" />
                  {item}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-white/50">{visibleCount} profiles shown</p>
        </div>
      </section>

      {showDignitaries ? (
        <section className="container-wide py-16">
          <SectionTitle icon="award" title="Dignitaries" kicker="Team" count={filteredDignitaries.length} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDignitaries.map((person, index) => (
              <Reveal key={profileKey(person, "Dignitaries", index)} delay={index * 0.04}>
                <PersonCard person={person} sectionLabel="Dignitaries" onOpen={setSelectedProfile} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {showPostBearers ? (
        <section className="bg-white/[0.035] py-16">
          <div className="container-wide">
            <SectionTitle icon="users" title="Post Bearers" kicker="Team" count={filteredPostBearers.length} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {filteredPostBearers.map((person, index) => (
                <Reveal key={profileKey(person, "Post Bearers", index)} delay={Math.min(index * 0.025, 0.18)}>
                  <PersonCard person={person} sectionLabel="Post Bearers" onOpen={setSelectedProfile} variant="featured" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showMembers && visibleMemberSections.length > 0 ? (
        <section className="container-wide py-20">
          <SectionTitle
            icon="graduation"
            title="Members"
            kicker="Academic years"
            count={visibleMemberSections.reduce((total, section) => total + section.people.length, 0)}
          />
          <div className="space-y-14">
            {visibleMemberSections.map((section) => (
              <div key={section.filter} className="border-t border-white/10 pt-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black">{section.title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase text-prakriti-accent">Class of {section.classYear}</p>
                  </div>
                  <p className="text-sm text-white/50">{section.people.length} members</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                  {section.people.map((person, index) => (
                    <Reveal key={profileKey(person, section.filter, index)} delay={Math.min(index * 0.015, 0.16)}>
                      <PersonCard person={person} sectionLabel={section.filter} onOpen={setSelectedProfile} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {showAlumni ? (
        <section className="bg-white/[0.035] py-20">
          <div className="container-wide">
            <SectionTitle icon="graduation" title="Alumni" kicker="Batches" count={alumniGroups.reduce((total, group) => total + group.people.length, 0)} />
            <div className="space-y-12">
              {alumniGroups.map((group) => (
                <div key={group.classYear} className="border-t border-white/10 pt-8">
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="text-2xl font-black">Class of {group.classYear}</h3>
                    <p className="text-sm text-white/50">{group.people.length} alumni</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {group.people.map((person, index) => (
                      <Reveal key={profileKey(person, "Alumni", index)} delay={Math.min(index * 0.012, 0.14)}>
                        <PersonCard person={person} sectionLabel="Alumni" onOpen={setSelectedProfile} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {visibleCount === 0 ? (
        <section className="container-wide py-20">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-8 text-center">
            <p className="text-lg font-black">No profiles found</p>
            <p className="mt-2 text-sm text-white/60">Try a different name, role, or class year.</p>
          </div>
        </section>
      ) : null}

      <Modal title={selectedProfile?.person.name ?? "Team member"} open={Boolean(selectedProfile)} onClose={() => setSelectedProfile(null)}>
        {selectedProfile ? (
          <div className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <OptimizedImage src={selectedProfile.person.image} alt={selectedProfile.person.name} className="aspect-[4/5] h-full w-full object-cover" eager />
            </div>
            <div>
              <p className="text-sm font-black uppercase text-prakriti-accent">{selectedProfile.person.role}</p>
              <h2 className="mt-2 text-3xl font-black">{selectedProfile.person.name}</h2>
              <dl className="mt-6 grid gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                  <dt className="font-black text-white">Section</dt>
                  <dd className="mt-1 text-white/70">{selectedProfile.sectionLabel}</dd>
                </div>
                {selectedProfile.person.classYear ? (
                  <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                    <dt className="font-black text-white">Academic Cohort</dt>
                    <dd className="mt-1 text-white/70">Class of {selectedProfile.person.classYear}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        ) : null}
      </Modal>
    </PageTransition>
  );
}
