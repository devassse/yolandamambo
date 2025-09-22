import React from "react";
import { useTranslation } from "react-i18next";

const about = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">
            <span>{t("about")}</span> {t("mim")}
          </h2>
          <p>
            Profissional altamente qualificada com mais de 15 anos de experiência, incluindo 12 anos em multinacionais nos sectores de mineração, soluções digitais e programas.
          </p>
          <p>
            Excelentes habilidades de comunicação, análise, e domínio de softwares como Primavera, SAP, e Sage. Experiência em gestão de projetos internacionais e profundo conhecimento da legislação em Angola, Moçambique e Portugal.
          </p>
          <ul>
            <li>
              Experiência com Primavera: 7+ anos, com certificações em faturação eletrónica, projetos e técnicas.
            </li>
            <li>
              Experiência com SAP B1: 2+ anos, com certificações em vários módulos.
            </li>
            <li>
              Experiência em contabilidade: 5+ anos, como contabilista em empresas grandes e pequenas.
            </li>
          </ul>
        </div>
        <div className="certifications-content">
          <article className="certifications">
            {/* BACHAREL */}
            <div className="certification">
              <h3>Bacharelado em Economia </h3>
              <p>Instituto Politécnico Maputo</p>
              <a href="#" style={{ pointerEvents: "none", cursor: "not-allowed" }}>
                {t("download")}
              </a>
            </div>
            {/* BACHAREL */}
            {/* LICENCIATURA */}
            <div className="certification">
              <h3>Licenciatura em Contabilidade e Auditoria</h3>
              <p>Universidade São Tomás de Moçambique</p>
              <a href="#" style={{ pointerEvents: "none", cursor: "not-allowed" }}>
                {t("download")}
              </a>
            </div>
            {/* LICENCIATURA */}
            {/* LICENCIATURA */}
            <div className="certification">
              <h3>Técnica de Contabilidade</h3>
              <p>Instituto Médio Politécnico </p>
              <a href="#" style={{ pointerEvents: "none", cursor: "not-allowed" }}>
                {t("download")}
              </a>
            </div>
            {/* LICENCIATURA */}
          </article>
          <article className="certifications">
            {/* BACHAREL */}
            <div className="certification">
              <h3>Certified Technician Primavera</h3>
              <p>Cegid Primavera</p>
              <a href="#" style={{ pointerEvents: "none", cursor: "not-allowed" }}>
                {t("download")}
              </a>
            </div>
            {/* BACHAREL */}
            {/* LICENCIATURA */}
            <div className="certification">
              <h3>Certificação em Faturação Eletrónica</h3>
              <p>Cegid Primavera</p>
              <a href="#" style={{ pointerEvents: "none", cursor: "not-allowed" }}>
                {t("download")}
              </a>
            </div>
            {/* LICENCIATURA */}
          </article>
        </div>
      </section>
      {/* ABOUT SECTION */}
    </>
  );
};

export default about;
