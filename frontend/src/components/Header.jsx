import { useState } from "react"
import Navbar from "./Navbar"
import NavBarMin from "./NavbarMin"
export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className="header">
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <NavBarMin showMenu={showMenu} />
        </header >
    )
}