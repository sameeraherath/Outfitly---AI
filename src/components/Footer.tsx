import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 bg-gray-800 text-gray-300">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Outfitly
            </h3>
            <p className="text-sm sm:text-base">
              © {currentYear} Outfitly. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/Terms"
              className="text-sm sm:text-base hover:text-white transition duration-300"
            >
              Terms
            </Link>
            <Link
              href="/Privacy"
              className="text-sm sm:text-base hover:text-white transition duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/Contact"
              className="text-sm sm:text-base hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
