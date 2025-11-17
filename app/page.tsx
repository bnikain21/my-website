import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center min-h-[60vh] px-6 md:px-12 lg:px-24 gap-10">
      
      <div className="flex-1 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Bijan Nikain
        </h1>

        <p className="text-lg md:text-2xl text-white mt-2 ">
          Georgia Institute of Technology
        </p>
      </div>
      <div className="flex-1 ">
        <h2 className="text-2xl font-semibold mb-2 text-white">About Me</h2>

        <p className="text-base md:text-lg text-white leading-relaxed">
          I am a graduate student at the Georgia Institute of Technology studying computer science.
        </p>
      </div>
    </section>
    
  ); 
}
