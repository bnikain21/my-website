import React from 'react'
import work_experience_data from "@/data/work_experience.json"

function WorkExperience() {
  return (
    <div>
        {
            work_experience_data.map((exp, i) => ( 
                <div key={i}>
                    <h2> Company Name: {exp.Company}</h2>
                    <h3> Title: {exp.Title}</h3>
                    <h4> Dates: {exp['Start Date']} - {exp['End Date']}</h4>
                    <h4> Location: {exp.Location}</h4>
                    <h3> Description: {
                            exp.Description.map((bullet, i) => (
                                <li key={i}> {bullet} </li>
                            ))
                        }
                    </h3>
                </div>
            ))
        }
    </div>
  )
}

export default WorkExperience
