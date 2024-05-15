"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center  sm:text-left justify-self-start"
        >
          <h1 className="text-gray-900 mb-4 uppercase text-5xl sm:text-6xl lg:text-7xl lg:leading-normal font-extrabold text-center md:text-left">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600">
              Florencia Astudillo{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Fotógrafa",
                5000,
                "Profesional",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-900 font-semibold text-base sm:text-lg mb-6 lg:text-xl pt-5 md:mr-10 text-start">
          Fotografa, especializada en fotoperiodismo, en constante aprendizaje y exploración creativa.
          </p>
          <div>
            <button className="px-0.5 transition-all duration-300 py-0.5 w-full sm:w-fit rounded-md mr-4 bg-pink-600 hover:bg-transparent text-white">
              <span className="block transition-all duration-300  hover:bg-violet-600 rounded-md px-4 py-2">
              <a
                href="https://www.instagram.com/creative_insurrecta/"
                target="_blank"
                className="uppercase font-bold"
              >
                Instagram
              </a>
              </span>
            </button>
            <button className="px-0.5 py-0.5 transition-all duration-300 w-full sm:w-fit rounded-md   hover:bg-transparent mt-3 
            text-white bg-blue-600
            ">
              <span className="block transition-all duration-300  hover:bg-violet-600 rounded-md px-4 py-2">
                <a href="/" target="_blank"
                className="uppercase font-bold"
                >
                  Linkedin
                </a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-md bg-gray-200 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-img.jpg"
              alt="fotografia florencia astudillo"
              title="Florencia Astudillo fotografa"
              className="  absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
