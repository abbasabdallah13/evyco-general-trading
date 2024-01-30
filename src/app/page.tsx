"use client"

import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import ContactSectionLG from "@/components/ContactSectionLG";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import Values from "@/components/Values";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";


export default function Home(){
    const pathname = usePathname()

    useEffect(() => {
      console.log(pathname)
    }, [pathname])
    
    return (
        <div className="">
            <Toaster />
            <Header />
            <About />
            <Values />
            <div id="contact" className="pt-20 lg:pt-14">
                <div className="lg:hidden">
                    <ContactUs />
                    <ContactForm />
                </div>
                <ContactSectionLG />
            </div>
        </div>
    )
}