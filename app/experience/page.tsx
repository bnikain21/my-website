"use client";

import { useState } from "react";
import experienceData from "@/data/work_experience.json";
import { ChevronRight } from "lucide-react";

export default function WorkExperiencePage() {
  const [selected, setSelected] = useState(0); // default first experience
  const exp = experienceData[selected];
  const background = "bg-";

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
              ${i === selected ? "bg-[#002836]" : "hover:bg-[#002836]"}
            `}
          >
            <p className="font-semibold text-sm text-white flex items-center gap-2">
                {item.title}
                {i === selected && <ChevronRight size={16} />}
            </p>

            <p className="text-sm text-white">{item.company}</p>
          </li>
        ))}
      </ul>

      {/* right side */}
      <div className="flex-1 border rounded-lg p-6 bg-[#002836]">
        <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
        <p className="text-white font-medium">{exp.company}</p>
        <p className="text-sm text-white mb-4">
          {exp.start_date} - {exp.end_date} • {exp.location}
        </p>

        <ul className="list-disc ml-5 space-y-1 text-white">
          {exp.description.map((d: string, idx: number) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}
