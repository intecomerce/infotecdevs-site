"use client";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// import About from "@/app/About";
// import WhatIDo from "@/app/WhatIDo";
// import Skills from "@/app/Skills";
// import Work from "@/app/Work";
// import Members from "@/app/Members";
// import Contact from "@/app/Contact";
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
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
