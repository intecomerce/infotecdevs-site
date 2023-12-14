"use client";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Members from "@/components/Members";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <html lang="pt-br">
      <body>
        <header>
          <nav>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
              setIsOpen={setIsOpen}
            />
          </nav>
        </header>
        <main>
          {children}
          <About />
          <WhatIDo />
          <Skills />
          <Work />
          <Members />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
