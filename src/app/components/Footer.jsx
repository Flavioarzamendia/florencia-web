import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F]  border-l-transparent border-r-transparent text-black sm:mx-2">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <h4 className="text-black px-4">Fotografia Profesional</h4>
        <p className="text-black">©Florencia Astudillo {new Date().getFullYear()}</p>
        <a className="text-[12px] md:[16px]" target="_blank" href="https://www.fadesarrolloweb.com.ar">Hecho por: www.fadesarrolloweb.com.ar</a>
      </div>
    </footer>
  );
};

export default Footer;