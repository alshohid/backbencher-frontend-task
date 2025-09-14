import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavButtonProps {
  href: string
  label: string
  className?: string
}

export function NavButton({ href, label, className = "" }: NavButtonProps) {
  return (
    <Button asChild className={`font-semibold rounded-md ${className}`}>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
