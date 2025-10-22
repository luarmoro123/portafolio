import React from "react";
import Navbar from "./navbar/navbar"
import { useTranslation } from "react-i18next";


const PortaFolio: React.FC = () => {
  
  const { t } = useTranslation();
  return (
     <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />

      <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold">{t("heroTitle", { name: t("name") })}</h1>
        <p className="text-lg mt-4 max-w-xl">{t("heroDesc")}</p>
      </section>

      <section id="sobre-mi" className="p-10">
        <h2 className="text-3xl font-bold mb-4">{t("nav.about")}</h2>
        <p>{t("about")}</p>
      </section>
    </div>

  );
};

export default PortaFolio;
