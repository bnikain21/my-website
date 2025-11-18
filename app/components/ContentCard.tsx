import React from 'react'
import Link from "next/link"; 

interface ContentCardInput {
    title: string;
    short_desc: string;
    path: string;
}
function ContentCard({title, short_desc, path}: ContentCardInput) {
    const href: string = `${path}`
    return (
        <div className="bg-d1 flex flex-col p-6 m-6 border-2 rounded-2xl shadow-sm shadow-a1 w-60 h-80">
            <h1 className='text-center text-3xl pt-6 pb-2 text-text-d1m'>{title}</h1>
            <h2 className='text-center text-xl pb-6 text-text-d1s'>{short_desc}</h2>

            <div className="mt-auto flex justify-center">
                <Link className="bg-a1 rounded-full p-4 cursor-pointer hover:text-text-a1s transition" href={href}>Learn More</Link>
            </div>
            
        </div>
    )
}

export default ContentCard
