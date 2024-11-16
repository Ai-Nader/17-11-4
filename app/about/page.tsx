export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About Us</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <section className="mb-8">
          <p className="text-lg text-muted-foreground">
            Automations Solutions is a leading provider of premium automation templates
            and custom solutions for businesses of all sizes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            We strive to make automation accessible to everyone by providing high-quality,
            ready-to-use templates and custom solutions that help businesses streamline
            their operations and boost productivity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Notion workspace optimization</li>
            <li>n8n workflow automation</li>
            <li>Make (Integromat) scenarios</li>
            <li>Zapier integration</li>
            <li>ChatGPT prompt engineering</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Have questions? We&apos;d love to hear from you. Send us a message at{" "}
            <a href="mailto:info@automation.market" className="text-primary hover:underline">
              info@automation.market
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}