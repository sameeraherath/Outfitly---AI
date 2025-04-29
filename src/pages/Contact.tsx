import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log("Form submitted:", formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-6">
                Your message has been sent successfully. We&apos;ll get back to
                you soon.
              </p>
              <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            You can also reach us directly at:{" "}
            <a
              href="mailto:contact@outfitly.com"
              className="text-purple-600 hover:underline"
            >
              contact@outfitly.com
            </a>
          </p>
          <Link href="/" className="text-purple-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
