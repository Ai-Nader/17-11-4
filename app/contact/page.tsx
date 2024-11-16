export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Contact Us</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <section className="mb-8">
          <p className="text-lg text-muted-foreground">
            We&apos;re here to help! Get in touch with us using any of the methods below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              OCTA LLC<br />
              30 N Gould St Ste 27302<br />
              Sheridan, WY 82801
            </p>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+17179044104" className="text-primary hover:underline">
                +1 717-904-4104
              </a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:info@automation.market" className="text-primary hover:underline">
                info@automation.market
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          <p>Saturday - Sunday: Closed</p>
        </section>
      </div>
    </div>
  )
}