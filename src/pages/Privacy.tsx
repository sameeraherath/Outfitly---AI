import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="prose max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At Outfitly, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you use our AI-powered outfit recommendation
              service.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                Personal information such as name and email address when you
                create an account
              </li>
              <li>Style preferences, clothing sizes, and fashion goals</li>
              <li>
                Usage data including how you interact with our application
              </li>
              <li>
                Device information such as browser type, IP address, and
                operating system
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our outfit recommendation service</li>
              <li>Personalize your experience based on your preferences</li>
              <li>Communicate with you about your account or our services</li>
              <li>Analyze usage patterns to enhance our platform</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure.
            </p>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may
              share your information with:
            </p>
            <ul>
              <li>Service providers who assist us in operating our platform</li>
              <li>Legal authorities when required by law</li>
              <li>
                Business partners, with your consent, to offer you certain
                products or services
              </li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
            </ul>

            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our platform. You can control cookies through your
              browser settings.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the effective date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please{" "}
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
