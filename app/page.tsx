import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <main>
      <h1>
        hello World
        <Link href="/users"> Users Page</Link>
      </h1> 
    </main>
  ); // use link so it does client side navigation, does not re-fetch everything when page changes
}
