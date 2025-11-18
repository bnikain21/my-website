"use client";

import { useState } from "react";
import experienceData from "@/data/work_experience.json";
import { ChevronRight } from "lucide-react";

export default function WorkExperiencePage() {
  const [selected, setSelected] = useState(0); // default first experience
  const exp = experienceData[selected];

  return (
    <section className="flex flex-col md:flex-row gap-10 min-h-[60vh] px-6 md:px-12 lg:px-24">
    
      {/* left side */}
      <ul className="flex-1 space-y-4">
        {experienceData.map((item, i) => (
          <li
            key={i}
            onClick={() => setSelected(i)}
            className={`
              p-6  cursor-pointer border
              transition
              border-gray-500
              rounded-full
              ${i === selected ? "bg-a1 text-text-a1m" : "bg-c1 text-text-c1m hover:bg-a1 hover:text-text-a1m"}
            `}
          >
            <p className={`font-bold text-2xl  flex items-center gap-2
            `}>
                {item.title}
                {i === selected && <ChevronRight size={16} />}
            </p>

            <p className={`text-xl 
            `}>{item.company} | {item.start_date} - {item.end_date}</p>
          </li>
        ))}
      </ul>

      {/* right side */}
      <div className="flex-1 border p-6 bg-a1 rounded-3xl">
        <h2 className="text-2xl text-center font-bold text-text-a1m">{exp.title} </h2>
        <h2 className="text-xl text-center font-bold text-text-a1m">{exp.company} </h2>
        <p className="font-medium text-center text-text-a1s space-y-8">{exp.location} | {exp.start_date} - {exp.end_date} </p>

        <ul className="list-disc ml-5 space-y-1 text-text-a1m  gap-x-8 ">
          {exp.short_desc.map((d: string, idx: number) => (
            <li className="text-2xl" key={idx}>{d}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3 ml-5 my-4 w-full">
          {exp.skills.map((s, idx) => (
            <button
              key={idx}
              className="rounded-full px-4 py-2 bg-c1 text-text-c1m text-sm font-medium"
            >
              {s}
            </button>
          ))}
        </ul>
      </div>

    </section>
  );
}
