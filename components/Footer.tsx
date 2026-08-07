import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            PublishHub
          </h2>
          <p className="mt-4 text-gray-400">
            A modern multi-author publication platform for sharing knowledge,
            tutorials, and stories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/articles">Articles</Link></li>
            <li><Link href="/authors">Authors</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            Email: support@publishhub.com
          </p>

          <p className="text-gray-400 mt-2">
            Hyderabad, India
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 PublishHub. All Rights Reserved.
      </div>
    </footer>
  );
}