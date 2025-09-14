import Link from "next/link"
import Image from "next/image"

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/zuno-logo.jpg" alt="Zuno" width={28} height={28} className="rounded-full" />
      <span className="text-lg font-extrabold text-black tracking-tight">
        ZUNO<sup><span className="font-extrabold">.</span></sup>
      </span>
    </Link>
  )
}
