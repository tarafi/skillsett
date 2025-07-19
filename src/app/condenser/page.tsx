import CondenserForm from "@/components/condenser-form";

export default function CondenserPage() {
  return (
    <div>
      <section className="bg-card py-20 sm:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
            AI Content Condenser
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Need to shorten a testimonial or course description? Paste your content below and let our AI create a concise and impactful summary.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container max-w-3xl">
          <CondenserForm />
        </div>
      </section>
    </div>
  );
}
