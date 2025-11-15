import React from 'react'
import WorkExperienceBlock from '../components/WorkExperienceBlock'
import work_experience_data from "@/data/work_experience.json"

function WorkExperiencePage() {
    return (
        <div>
            <h1>Work Experience</h1>
            {work_experience_data.map((exp, i) => (
                <WorkExperienceBlock key={i} data={exp}/>
            ))}
        </div>
    )
}

export default WorkExperiencePage
