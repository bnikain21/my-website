import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 px-10 py-3 rounded-full bg-a1 backdrop-blur-xl shadow-lg border border-third/40 z-50">
        <ul className="flex items-center gap-10 text-text-a1m font-medium">
            <Link className="cursor-pointer hover:text-text-a1s transition px-2" href="/">Home</Link>
            {/* <Link className="cursor-pointer hover:text-text-a1s transition" href="/experience">Experience</Link> */}
            <Link className="cursor-pointer hover:text-text-a1s transition" href="/contact">Contact</Link>
        </ul>
    </nav>
  )
}

export default NavBar
