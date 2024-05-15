"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-2 font-semibold">
        <li>Amplia experiencia en técnicas fotográficas y estilos artísticos.</li>
        <li>Especialización en fotoperiodismo, habilidad para capturar momentos significativos y contar historias a través de la imagen.</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2 font-semibold">
        <li>Inicié mis estudios de fotografía en la escuela CEIC en San Justo en 2017.</li>
        <li>Continué mi formación en 2020 en la Universidad de La Matanza UMLAN, donde realicé diversos cursos de capacitación.</li>
        <li>Además, me formé en la ARGRA Escuela, perteneciente a la Asociación de Reporteros Gráficos, ampliando así mis conocimientos y habilidades en el campo de la fotografía periodística.</li>
      </ul>
    ),
  },
  {
    title: "Servicios",
    id: "servicios",
    content: (
      <ul className="list-disc pl-2 space-y-2 font-semibold">
        <li>Fotografía de Eventos Sociales</li>
        <li>Retratos Profesionales</li>
        <li>Fotografía Periodística y Documental</li>
        <li>Fotografía de Producto y Publicidad</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className=" text-gray-900" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center   py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-xl"
          src="/images/about-image.jpg"
          alt="Working web developer"
          title="Working web developer"
          width={500}
          height={500}
        />
        <div className="mt-10 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 border-l-4 border-pink-600 pl-6 uppercase ">
            Sobre Mí
          </h2>
          <div className=" p-6 bg-[#F4B54E] rounded-lg">
            <p className="font-xl font-semibold leading-6 lg:text-lg ">
            Soy una fotógrafa nacida en Buenos Aires en 1996, con formación académica en la escuela CEIC 
            y especialización en fotoperiodismo. Mi pasión por capturar momentos significativos y contar 
            historias a través de la imagen me ha llevado a desarrollar habilidades sólidas en técnicas 
            fotográficas y ética profesional. Ofrezco servicios de fotografía enfocados en el fotoperiodismo,
             comprometida con la excelencia y la responsabilidad en cada proyecto.
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("servicios")}
              active={tab === "servicios"}
            >
              {" "}
              Servicios{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
