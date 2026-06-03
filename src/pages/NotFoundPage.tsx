import { Link } from "react-router-dom";
import { PageTransition } from "../components/ui/PageTransition";
import { Seo } from "../components/ui/Seo";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <Seo title="Page Not Found" description="The requested PRAKRITI page could not be found." canonicalPath="/404" />
      <section className="container-narrow flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-black uppercase text-prakriti-accent">404</p>
        <h1 className="mt-3 text-5xl font-black md:text-7xl">This trail ends here.</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
          The page you opened is not part of the current PRAKRITI route map.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-prakriti-accent bg-prakriti-accent px-5 py-3 text-sm font-black text-black transition hover:bg-white"
        >
          Return Home
        </Link>
      </section>
    </PageTransition>
  );
}
