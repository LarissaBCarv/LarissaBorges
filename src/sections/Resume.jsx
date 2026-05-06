import { useState, useEffect } from "react";
import "../styles/Resume.css";

export default function Resumo() {
  const [active, setActive] = useState(null);
  const [closing, setClosing] = useState(false);

  const closeCard = () => {
    setClosing(true);

    setTimeout(() => {
      setActive(null);
      setClosing(false);
    }, 250);
  };

  const timelineData = [
    {
      icon: "/btnProtese1.png",
      title: "Início na Prótese Dentária",
      year: "2018 - 2021",
      text: [
        "Entrada como auxiliar em laboratório",
        "Aprendizado prático de processos técnicos",
        "Primeiro contato com a importância do detalhe na experiência final",
      ],
    },
    {
      icon: "/btnProtese2.png",
      title: "Responsável Técnica de Laboratório",
      year: "2021 - 2024",
      text: [
        "Responsável pela produção e qualidade",
        "Controle de prazos e organização do fluxo",
        "Tomada de decisões técnicas no dia a dia",
      ],
    },
    {
      icon: "/btnFrt1.png",
      title: "Transição para Tecnologia",
      year: "2024",
      text: [
        "Início em Análise e Desenvolvimento de Sistemas",
        "Descoberta do universo UI/UX + Front-End",
        "Início da transição do físico para o digital",
      ],
    },
    {
      icon: "/btnGraf.png",
      title: "Produção Gráfica",
      year: "2024 - 2026",
      text: [
        "Entrada na produção gráfica em parceria familiar",
        "Em 2025, assumi totalmente a operação",
        "Foco em acabamento, qualidade e entrega final",
      ],
    },
    {
      icon: "/btnFrt2.png",
      title: "Evolução como Desenvolvedora",
      year: "Atualmente",
      text: [
        "Criação de interfaces web",
        "Figma, HTML, CSS, React e Vite",
        "Foco em experiência + estética",
        "Evoluindo design + código de forma integrada",
        "Construindo produtos com identidade própria",
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = () => {
      if (active !== null) closeCard();
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [active]);

  useEffect(() => {
    const handleClickOutside = () => {
      setActive(null);
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="resumo-section" id="resume">
      <div className={`resumo-bg ${active !== null ? `bg-${active}` : ""}`}>
        <img src="/resumeProtese1.png" className="bg-img bg-0" />
        <img src="/resumeProtese2.png" className="bg-img bg-1" />
        <img src="/resumeProgramacao1.png" className="bg-img bg-2" />
        <img src="/resumeGraf.png" className="bg-img bg-3" />
        <img src="/resumeProgramacao2.png" className="bg-img bg-4" />

        <img src="/resumeProtese1.png" className="bg-img bg-0 right" />
        <img src="/resumeProtese2.png" className="bg-img bg-1 right" />
        <img src="/resumeProgramacao1.png" className="bg-img bg-2 right" />
        <img src="/resumeGraf.png" className="bg-img bg-3 right" />
        <img src="/resumeProgramacao2.png" className="bg-img bg-4 right" />
      </div>

      <h2 className="resumo-title fade-side">RESUMO</h2>

      <a
        href="/CV Larissa Borges de Carvalho.pdf"
        download
        className="cv-button"
      >
        ACESSAR CV
      </a>

      <div className="resumo-container">
        <div className="resumo-center">
          <h3 className="resumo-subtitle fade-up">MINHA EVOLUÇÃO</h3>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${active === index ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();

              if (active === index) {
                closeCard();
              } else {
                setActive(index);
                setClosing(false);
              }
            }}
          >
            <div className="timeline-icon">
              <img src={item.icon} />
            </div>

            {active === index && (
              <div
                className={`timeline-card ${closing ? "exit" : "enter"}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="card-content">
                  <div className="card-year">{item.year}</div>

                  <div className="card-text">
                    <h4>{item.title}</h4>
                    <ul>
                      {item.text.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
