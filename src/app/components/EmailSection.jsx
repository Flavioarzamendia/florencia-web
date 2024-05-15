"use client";
import Rect from "react";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 pl-4">
        <h5 className="text-xl font-bold text-black uppercase my-2 py-3 border-l-4 border-pink-600 pl-4">
          Contactame
        </h5>
        <div className="font-semibold text-black mb-4 mt-5 max-w-md py-5 bg-[#F4B54E]  pl-4 rounded-lg">
          {" "}
          <h4 className="text-xl mb-2">Florencia Daniela Astudillo</h4>
          <p className=" mb-6">González Catán, Buenos Aires</p>
          <ul>
            <li className=" font-normal">Correo electrónico: flopi.daniela14@gmail.com</li>
            <li className=" font-normal">Tel: 1164343696</li>
          </ul>
        </div>
        <div className="socials inline-block p-1 rounded-lg gap-2  bg-pink-700">
          <Link
            href="https://www.linkedin.com/in/flavio-arzamendia-salinas"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10 bg-neutral-800  p-6 rounded-lg">
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default EmailSection;
