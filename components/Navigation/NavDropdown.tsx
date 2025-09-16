import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavDropdownProps {
  label: string
  items: { name: string; href: string }[]
  gridCols?: 1 | 2 | 3 | 4
  width?: string
}

export function NavDropdown({ label, items, gridCols = 1, width = "w-48" }: NavDropdownProps) {

  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[gridCols]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-green-600 transition-colors font-medium">
        {label} <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={`${width} p-4 shadow-xl bg-white rounded-xl border border-gray-200 z-50`}
        sideOffset={8}
        align="start"

      >
        <div className={`grid ${gridClass} gap-x-8 gap-y-3`}>
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm text-gray-800 rounded-md hover:bg-green-100 hover:text-green-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
