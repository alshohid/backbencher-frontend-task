"use client"

import { useState } from "react"
import { NavLogo } from "./NavLogo"
import { NavDropdown } from "./NavDropdown"
import { NavButton } from "./NavButton"
import { Menu, X } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import { pages, templateLinks } from "@/lib/utility/menuUtils"





export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-2 z-50">
            <div className="max-w-5xl bg-[#fbfbfb] shadow-sm border border-gray-200 mx-auto px-4 sm:px-6 lg:px-8 rounded-md">
                <div className="flex items-center justify-between h-16">
                    <NavLogo />
                    <div className="hidden md:flex items-center space-x-8">
                        <h4>Home</h4>
                        <NavDropdown label="Pages" items={pages} gridCols={4} width="w-[420px]" />
                        <NavDropdown label="Template" items={templateLinks} />
                    </div>

                    <div className="hidden md:block">
                        <NavButton href="/request-demo" label="Request demo" className="bg-[#d2f0a3] hover:bg-[#c2e593] text-black" />
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>


                {isOpen && <MobileMenu pages={pages} />}
            </div>
        </nav>
    )
}
