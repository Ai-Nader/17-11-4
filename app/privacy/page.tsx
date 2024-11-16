export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Billing and payment information</li>
            <li>Account credentials</li>
            <li>Usage data and preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your orders and payments</li>
            <li>Provide customer support</li>
            <li>Send important updates about our services</li>
            <li>Improve our platform and user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@automation.market" className="text-primary hover:underline">
              info@automation.market
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}