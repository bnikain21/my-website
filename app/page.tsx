import Image from "next/image";
import Link from "next/link"; 
import TypingAnimation from "./components/TypingAnimation";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center min-h-[60vh] px-6 md:px-12 lg:px-24 gap-10">
      
      <div className="flex-1 text-text">
        <h1 className="text-3xl text-text-e1m md:text-5xl lg:text-6xl font-bold">
          <TypingAnimation text={["Bijan", " ", "Nikain"]}/>
        </h1>
        

        <p className="text-lg text-text-e1s md:text-2xl mt-2 ">
          Georgia Institute of Technology
        </p>
        <a href="/resume.pdf" download className="mt-6 inline-block py-4 px-6 text-text-a1m rounded-full bg-a1 hover:bg-b1 transition">
          Download CV
        </a>
      </div>
      <div className="flex-1 ">
        <h2 className="text-2xl font-semibold mb-2 text-text-e1m">About Me</h2>

        <p className="text-base md:text-lg text-text leading-relaxed text-text-e1s">
          I am a graduate student at the Georgia Institute of Technology studying computer science.
        </p>
      </div>
    </section>
    
  ); 
}
