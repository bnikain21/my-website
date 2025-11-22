"use client";

import { useState } from "react";
import experienceData from "@/data/work_experience.json";
import { ChevronRight } from "lucide-react";



export default function WorkExperiencePage() {
  const [selected, setSelected] = useState(0); // default first experience

  function clicked (id:number) {
    setSelected(id);
  }

  return (
    <section className="flex">
      <div className="flex flex-col gap-4 w-1/3 pr-5">

        {experienceData.map((item, i) => (

          <button key={i} className={`
            ${i === selected ? "bg-a1 text-text-a1m": "bg-e1 text-text-e1m border-b1 hover:bg-a1 hover:text-text-a1m"}
            border-2 
            border-b1
            rounded-xl 
            p-4 
            shadow-sm
          `} onClick={() => clicked(i)}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm opacity-80">{item.company} | {item.start_date} - {item.end_date}</p>
          </button>
        ))}
        

      </div>

      <div className="bg-a1 text-e1 p-10 rounded-2xl shadow-md border border-b1 w-2/3">
        <h2 className="text-2xl font-semibold">{experienceData[selected].title}</h2>
        <p className="text-b1 font-medium">{experienceData[selected].company} | {experienceData[selected].location}</p>

        <ul className="mt-4 space-y-2">
          {
            experienceData[selected].short_desc.map((item, i) => (
              <li key={i}>{item}</li>
            ))
          }
        </ul>

        <div className="flex gap-2 mt-4 flex-wrap">
          {
            experienceData[selected].skills.map((s, i) => (
              <span key={i} className="bg-b1 text-a1 px-3 py-1 rounded-full text-sm">{s}</span>
            ))
          }
          
        </div>
      </div>
    </section>
  );
}
