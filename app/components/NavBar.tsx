import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 px-10 py-3 rounded-full bg-white/30 backdrop-blur-xl shadow-lg border border-white/40 z-50">
        <ul className="flex items-center gap-10 text-gray-800 font-medium">
            <Link className="cursor-pointer hover:text-black transition" href="/">Home</Link>
            <Link className="cursor-pointer hover:text-black transition" href="/experience">Experience</Link>
            <Link className="cursor-pointer hover:text-black transition" href="/experience">Contact</Link>
        </ul>
    </nav>
  )
}

export default NavBar
