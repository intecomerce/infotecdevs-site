"use client";
import Header from "@/components/Header";
import "./globals.css";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "InfotecDevs",
  description: "Grupo de desenvolvedores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </nav>
        </header>
        <main>
          {children}
          <About />
          <WhatIDo />
          <Skills />
          <Work />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
