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
        <article className={styles.block}>
            <div className={styles.headerRow}>
                <h2 className={styles.company}>{data.company}</h2>

                <span className={styles.dates}>
                    {data.start_date} - {data.end_date}
                </span>
            </div>
            
            <div className={styles.titleRow}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.location}>{data.location}</p>
            </div>


            <ul className="list-disc ml-5">
                {data.description.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
        </article>
  )
}

export default WorkExperienceBlock
