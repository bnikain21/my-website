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
              p-3 rounded-lg cursor-pointer border
              transition
              border-gray-500
              ${i === selected ? "bg-a1 text-text-a1m" : "bg-c1 text-text-c1m hover:bg-a1 hover:text-text-a1m"}
            `}
          >
            <p className={`font-semibold text-sm flex items-center gap-2
            `}>
                {item.title}
                {i === selected && <ChevronRight size={16} />}
            </p>

            <p className={`text-sm 
            `}>{item.company}</p>
          </li>
        ))}
      </ul>

      {/* right side */}
      <div className="flex-1 border rounded-lg p-6 bg-a1">
        <h2 className="text-2xl font-bold text-text-a1m">{exp.title} | {exp.company} </h2>
        <p className="font-medium text-text-a1s">{exp.location} | {exp.start_date} - {exp.end_date} </p>

        <ul className="list-disc ml-5 space-y-1 text-text-a1m">
          {exp.description.map((d: string, idx: number) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}
