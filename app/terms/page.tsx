export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Terms of Use</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the
            terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (templates) for personal, non-commercial transitory viewing only.</p>
          <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Transfer the materials to another person</li>
            <li>Attempt to decompile or reverse engineer any software contained in the templates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p>
            The materials on our website are provided on an &apos;as is&apos; basis. We make no
            warranties, expressed or implied, and hereby disclaim and negate all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Contact</h2>
          <p>
            Questions about the Terms of Service should be sent to us at{" "}
            <a href="mailto:info@automation.market" className="text-primary hover:underline">
              info@automation.market
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}