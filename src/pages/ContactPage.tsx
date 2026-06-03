import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { PageTransition } from "../components/ui/PageTransition";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Seo } from "../components/ui/Seo";
import { site } from "../data/content";

const clubEmail = "prakriti.nitdgp@gmail.com";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

function validate(values: FormValues) {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.phone.trim() && !/^[0-9+\-\s()]{7,20}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (values.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [mailtoHref, setMailtoHref] = useState("");

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  const canSubmit = useMemo(() => Object.keys(validate(values)).length === 0, [values]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    const subject = encodeURIComponent(`PRAKRITI website message from ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "Not provided"}\n\n${values.message}`);
    const nextMailto = `mailto:${clubEmail}?subject=${subject}&body=${body}`;
    setMailtoHref(nextMailto);

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        });
        if (!response.ok) throw new Error("Contact endpoint failed");
        setStatus("success");
        setValues(initialValues);
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Contact PRAKRITI, The Techno Environmental Club of NIT Durgapur, through the website form or official social links."
        canonicalPath="/contact"
        image={site.logo}
      />

      <section className="container-wide grid gap-10 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Start a conversation with PRAKRITI."
            description="Reach out for collaborations, event queries, project discussions, magazine contributions, and sponsor conversations."
          />
          <div className="mt-8 grid gap-4">
            <div className="surface rounded-lg p-5">
              <Mail aria-hidden="true" className="mb-4 h-6 w-6 text-prakriti-accent" />
              <h2 className="font-black">Email</h2>
              <a className="mt-2 inline-block text-sm text-white/70 transition hover:text-prakriti-accent" href={`mailto:${clubEmail}`}>
                {clubEmail}
              </a>
            </div>
            <div className="surface rounded-lg p-5">
              <MapPin aria-hidden="true" className="mb-4 h-6 w-6 text-prakriti-accent" />
              <h2 className="font-black">Campus</h2>
              <p className="mt-2 text-sm text-white/70">
                {site.campus}, {site.location}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-sm font-black uppercase text-white/90">Social Links</h2>
            <div className="flex flex-wrap gap-3">
              {site.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/70 transition hover:border-prakriti-accent/60 hover:text-prakriti-accent"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="glass-panel rounded-lg p-6">
          <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2" htmlFor="name">
                <span className="text-sm font-black">Name</span>
                <input
                  id="name"
                  value={values.name}
                  onChange={(event) => updateValue("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="h-12 rounded-lg border border-white/10 bg-black/[0.35] px-4 text-white outline-none transition placeholder:text-white/[0.35] focus:border-prakriti-accent"
                  placeholder="Your name"
                />
                {errors.name ? <span id="name-error" className="text-sm text-red-300">{errors.name}</span> : null}
              </label>
              <label className="grid gap-2" htmlFor="email">
                <span className="text-sm font-black">Email</span>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => updateValue("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="h-12 rounded-lg border border-white/10 bg-black/[0.35] px-4 text-white outline-none transition placeholder:text-white/[0.35] focus:border-prakriti-accent"
                  placeholder="you@example.com"
                />
                {errors.email ? <span id="email-error" className="text-sm text-red-300">{errors.email}</span> : null}
              </label>
            </div>

            <label className="grid gap-2" htmlFor="phone">
              <span className="text-sm font-black">Phone</span>
              <input
                id="phone"
                value={values.phone}
                onChange={(event) => updateValue("phone", event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className="h-12 rounded-lg border border-white/10 bg-black/[0.35] px-4 text-white outline-none transition placeholder:text-white/[0.35] focus:border-prakriti-accent"
                placeholder="+91"
              />
              {errors.phone ? <span id="phone-error" className="text-sm text-red-300">{errors.phone}</span> : null}
            </label>

            <label className="grid gap-2" htmlFor="message">
              <span className="text-sm font-black">Message</span>
              <textarea
                id="message"
                value={values.message}
                onChange={(event) => updateValue("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="min-h-40 resize-y rounded-lg border border-white/10 bg-black/[0.35] p-4 text-white outline-none transition placeholder:text-white/[0.35] focus:border-prakriti-accent"
                placeholder="Tell us what you want to discuss"
              />
              {errors.message ? <span id="message-error" className="text-sm text-red-300">{errors.message}</span> : null}
            </label>

            <button
              type="submit"
              disabled={status === "submitting" || !canSubmit}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-prakriti-accent bg-prakriti-accent px-5 py-3 text-sm font-black text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
              {status === "submitting" ? "Sending" : "Send Message"}
            </button>

            {status === "success" ? (
              <div className="rounded-lg border border-prakriti-accent/[0.45] bg-prakriti-primary/[0.12] p-4 text-sm leading-7 text-white" role="status">
                <div className="flex items-center gap-2 font-black">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-prakriti-accent" />
                  Message validated
                </div>
                {!endpoint && mailtoHref ? (
                  <a className="mt-2 inline-flex font-bold text-prakriti-accent hover:text-white" href={mailtoHref}>
                    Open email draft
                  </a>
                ) : null}
              </div>
            ) : null}

            {status === "error" ? (
              <div className="rounded-lg border border-red-400/45 bg-red-500/10 p-4 text-sm text-red-100" role="alert">
                The message could not be sent through the configured endpoint. Please use the email link on this page.
              </div>
            ) : null}
          </form>
        </Reveal>
      </section>
    </PageTransition>
  );
}
