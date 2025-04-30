import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero section */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Personal AI Outfit Stylist
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 mx-auto max-w-2xl">
            Outfitly uses advanced AI to recommend perfect outfits based on your
            preferences, occasion, and style. Say goodbye to outfit indecision
            forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recommend">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 sm:py-16 bg-white" id="how-it-works">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16">
            How Outfitly Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Image
                  src="/window.svg"
                  alt="Describe"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                1. Describe Your Needs
              </h3>
              <p className="text-gray-600">
                Tell us about the occasion, your style preferences, and any
                specific requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Image src="/globe.svg" alt="AI" width={24} height={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                2. AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI processes your information to understand your unique
                style profile.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 sm:p-6 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Image
                  src="/file.svg"
                  alt="Recommendations"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                3. Get Recommendations
              </h3>
              <p className="text-gray-600">
                Receive personalized outfit suggestions tailored specifically to
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">
                &quot;Outfitly has completely transformed how I dress. No more
                standing in front of my closet for 30 minutes every
                morning!&quot;
              </p>
              <p className="font-semibold">- Sarah T.</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">
                &quot;The AI recommendations are spot on. It&apos;s like having
                a personal stylist in my pocket.&quot;
              </p>
              <p className="font-semibold">- Michael K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-purple-700 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their wardrobe with
            Outfitly&apos;s AI-powered recommendations.
          </p>
          <Link href="/recommend">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 w-full sm:w-auto"
            >
              Try Outfitly Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
