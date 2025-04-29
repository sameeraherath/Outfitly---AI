import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-800 text-gray-300">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Outfitly</h3>
            <p>© {currentYear} Outfitly. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/Terms"
              className="hover:text-white transition duration-300"
            >
              Terms
            </Link>
            <Link
              href="/Privacy"
              className="hover:text-white transition duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/Contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
