import React from 'react'
import WorkExperienceBlock from '../components/WorkExperienceBlock'
import work_experience_data from "@/data/work_experience.json"

function WorkExperiencePage() {
    return (
        <div>
            <h1>Work Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {work_experience_data.map((exp, i) => (
                    <WorkExperienceBlock key={i} data={exp}/>
                ))}  
            </div>
            
        </div>
    )
}

export default WorkExperiencePage
