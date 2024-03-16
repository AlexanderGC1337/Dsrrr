'use client'

import Image from "next/image";
import Footer from "./components/Footer";
import Nyheder from "./components/Nyheder";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Stillinger from "./components/Stillinger";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero/>
      <Nyheder />
      <Stillinger/>
      <Footer />
    </main>
  );
}
