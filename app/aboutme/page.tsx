import React from 'react'
import Image from "next/image"

function AboutMePage() {
  return (
    <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-3xl text-text-e1m mb-3">About Me:</h1>
        <Image src='/headshot.png' alt='headshot' width={300} height={700} />
        
        <p className="text-xl text-text-e1m pt-3 max-w-lg self-center">
            I am a computer science graduate student at the Georgia Institute of Technology specializing 
            in machine learning, with experience in software engineering, building AI-driven applications,
            and working with computer networks.
        </p>
    </div>
  )
}

export default AboutMePage
