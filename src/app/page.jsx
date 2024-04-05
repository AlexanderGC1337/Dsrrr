'use client'

import Image from "next/image";
import Footer from "./components/Footer";
import Nyheder from "./components/Nyheder";
import Header from "./components/header/page";
import Hero from "./components/heroes/Homepage/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <Nyheder/>
      <Footer />
    </main>
  );
}
