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
import { useState } from "react";

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
