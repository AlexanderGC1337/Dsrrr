'use client'

import Image from "next/image";
import Footer from "./components/Footer";
import Nyheder from "./components/Nyheder";
import Header from "./components/header/page";
import Hero from "./components/heroes/Homepage/page";
import Galleri from "./components/Galleri";

export default function Home() {
  return (
    <main>
      <Hero />
      <Nyheder />
    </main>
  );
}
