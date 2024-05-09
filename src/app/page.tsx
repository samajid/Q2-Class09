import Image from "next/image";
import Hero from "../components/hero";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <>
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Card Section */}
      <Cards />
    </main> 
    </>
  );
}
