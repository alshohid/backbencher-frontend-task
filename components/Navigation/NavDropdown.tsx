import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavDropdownProps {
  label: string
  items: { name: string; href: string }[]
  gridCols?: number
  width?: string
}

export function NavDropdown({ label, items, gridCols = 1, width = "w-48" }: NavDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-green-600 transition-colors font-medium">
        {label} <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${width} p-4 shadow-lg rounded-lg`}>
        <div className={`grid grid-cols-${gridCols} gap-3`}>
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-2 py-1 text-sm text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
