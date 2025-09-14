import Link from "next/link"
import { NavButton } from "./NavButton"

interface MobileMenuProps {
  pages: { name: string; href: string }[]
}

export function MobileMenu({ pages }: MobileMenuProps) {
  return (
    <div className="md:hidden py-4 border-t border-gray-100">
      <div className="space-y-2">
        <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-green-600">
          Home
        </Link>
        <div className="px-3 py-2">
          <div className="text-sm font-medium text-gray-500 mb-2">Pages</div>
          <div className="grid grid-cols-2 gap-2">
            {pages.slice(0, 8).map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className="block px-2 py-1 text-sm text-gray-700 hover:text-green-600"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
        <NavButton href="/request-demo" label="Request demo" className="mx-3 bg-green-600 hover:bg-green-700 text-white" />
      </div>
    </div>
  )
}
