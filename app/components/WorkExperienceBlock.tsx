import React from 'react'
import styles from  "./WorkExperienceBlock.module.css";

interface experienceData {
    company: string;
    title: string;
    start_date: string;
    end_date: string;
    location: string;
    description: string[];
}

function WorkExperienceBlock({data} : {data:experienceData}) {
  return (
        <div className={styles.block}>
            <h2 className={styles.company}>{data.company}</h2>
            <h3 className={styles.title}>{data.title}</h3>
            <h4 className={styles.dates}>{data.start_date} - {data.end_date}</h4>
            <h4 className={styles.location}>{data.location}</h4>
            <h3 className={styles.description}>{
                    data.description.map((bullet, i) => (
                        <li key={i}> {bullet} </li>
                    ))
                }
            </h3>
        </div>
  )
}

export default WorkExperienceBlock
