import React from "react";
import Navbar from "./navbar/navbar"
import { useTranslation } from "react-i18next";
import Hero from "./hero/hero";


const PortaFolio: React.FC = () => {

  const { t } = useTranslation();
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />


      <section id="sobre-mi" className="p-10">
        <h2 className="text-3xl font-bold mb-4">{t("nav.about")}</h2>
        <p>{t("about")}</p>
      </section>
    </div>

  );
};

export default PortaFolio;
