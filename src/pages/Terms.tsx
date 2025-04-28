import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Terms of Service
        </h1>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Outfitly, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Outfitly provides an AI-powered styling service that recommends
              outfits based on user preferences, occasions, and style. The
              recommendations are generated using artificial intelligence
              technology.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You may be required to create an account to use certain features
              of our service. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account.
            </p>

            <h2>4. User Content</h2>
            <p>
              By submitting information, data, or preferences to Outfitly, you
              grant us a non-exclusive, worldwide, royalty-free license to use,
              process, and store this information for the purpose of providing
              our service to you.
            </p>

            <h2>5. Privacy</h2>
            <p>
              Our collection and use of personal information is governed by our{" "}
              <Link href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Outfitly and its affiliates shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of or inability to use the service.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your
              continued use of Outfitly after such changes constitutes your
              acceptance of the new terms.
            </p>

            <h2>8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and
              access to Outfitly at our sole discretion, without notice, for
              conduct that we believe violates these Terms or is harmful to
              other users, us, or third parties, or for any other reason.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Outfitly operates, without
              regard to its conflict of law provisions.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please{" "}
              <Link href="/contact" className="text-purple-600 hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Last updated: April 28, 2025</p>
          <Link href="/" className="text-purple-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
