import Image from "next/image";
import Link from "next/link"; 
import TypingAnimation from "./components/TypingAnimation";
import ContentCard from "./components/ContentCard";

export default function Home() {
  return (
    <section className="px-6 md:px-12 lg:px-24 gap-10">
      <h1 className="text-center text-6xl text-text-e1m  font-bold"><TypingAnimation text={["Bijan", " ", "Nikain"]}/></h1>
      <h2 className="text-center text-3xl text-text-e1m pt-3">Graduate Student @ Georgia Instiute of Technology</h2>
        <div className="flex justify-center">
        <a href="/resume.pdf" download className=" mt-6 py-4 px-6 text-text-a1m rounded-full bg-a1 hover:bg-b1 transition">
          Download CV
        </a>
      </div>
      
      <div className="flex justify-center flex-wrap">
        <ContentCard title="About Me" short_desc="Introduction" path="/aboutme"/>
        <ContentCard title="Experience" short_desc="Industry Roles" path="/experience"/>  
        <ContentCard title="Projects" short_desc="Technical Work" path="/projects"/>    
      </div>
      <div className="flex justify-center items-center h-20 mt-12">
        <p className="text-center text-text-e1m text-sm">
          Designed by me. 
          Built using <a className="font-bold" href="https://nextjs.org/"> Next.js </a> and 
          <a className="font-bold" href="https://tailwindcss.com/"> TailwindCSS</a>. Deployed using  
           <a className="font-bold" href="https://aws.amazon.com/amplify/"> AWS Amplify. </a>
        </p>
      </div>
    </section>
    
  ); 
}
