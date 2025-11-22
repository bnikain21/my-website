import React from 'react'
import Image from "next/image"
import education_data from "@/data/education.json"

function AboutMePage() {
  return (
    <section className='flex flex-col md:flex-row gap-10'>
      <div className="flex flex-col items-center text-center md:w-1/2">
        <Image src='/headshot.png' alt='headshot' width={300} height={700} />
        
        <p className="text-xl text-text-e1m pt-3 max-w-lg self-center">
            I am a computer science graduate student at the Georgia Institute of Technology specializing 
            in machine learning, with experience in software engineering, building AI-driven applications,
            and working with computer networks.
        </p>
      </div>
      <div className='flex flex-col md:w-1/2 pl-6'>
        <div className="relative border-l-2 border-b1 pl-8 space-y-10">
          {education_data.map((e, i) => (
              <div key={i} className='opacity-100 pb-10'>
                <div className="absolute -left-2.5 w-5 h-5 bg-b1 rounded-full"></div>
                <h2 className="text-2xl font-semibold text-text-e1m">{e.school}</h2>
                <p className="text-sm text-text-e1m mb-1">{e.start_date.split('/')[1]} - {e.end_date.split('/')[1]}</p>
                <p className="text-text-e1s">{e.degree_abr} {e.major}</p>
                {e.coursework.map((c, i) => (
                  <button key={i} className="bg-d1 p-2 m-2 text-text-d1m rounded-2xl" >{c}</button>
                ))}
              </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default AboutMePage
