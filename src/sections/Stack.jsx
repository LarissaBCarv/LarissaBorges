import { useEffect, useState } from "react";
import "../styles/Stack.css";

export default function Stack() {
  const [activeBg, setActiveBg] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-side");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stackFrontend = [
    {
      name: "React",
      icon: "/reactLogo.png",
      desc: "Criação de interfaces dinâmicas e componentizadas",
    },
    {
      name: "JavaScript",
      icon: "/jsLogo.png",
      desc: "Lógica e interatividade para aplicações web",
    },
    {
      name: "CSS",
      icon: "/cssLogo.png",
      desc: "Estilização moderna com foco em responsividade",
    },
  ];

  const stackTools = [
    {
      name: "Git",
      icon: "/gitLogo.png",
      desc: "Versionamento e organização de código",
    },
    {
      name: "Vite",
      icon: "/viteLogo.png",
      desc: "Estruturação rápida de projetos front-end",
    },
    {
      name: "VS Code",
      icon: "/vsCodeLogo.png",
      desc: "Editor utilizado no desenvolvimento front-end",
    },
  ];

  return (
    <section className="stack-section" id="tech">
      <h2 className="stack-title fade-side">STACKS</h2>
      <div className={`stack-bg ${activeBg !== null ? `bg-${activeBg}` : ""}`}>
        <img
          src="/reactBack.png"
          className="bg-img"
          style={{
            opacity: activeBg === 0 ? 0.06 : 0,
            transform: activeBg === 0 ? "scale(1)" : "scale(0.96)",
          }}
        />

        <img
          src="/jsBack.png"
          className="bg-img"
          style={{
            opacity: activeBg === 1 ? 0.06 : 0,
            transform: activeBg === 1 ? "scale(1)" : "scale(0.96)",
          }}
        />

        <img
          src="/cssBack.png"
          className="bg-img"
          style={{
            opacity: activeBg === 2 ? 0.06 : 0,
            transform: activeBg === 2 ? "scale(1)" : "scale(0.96)",
          }}
        />
        <img
          src="/gitBack.png"
          className="bg-img"
          style={{
            opacity: activeBg === 3 ? 0.06 : 0,
            transform: activeBg === 3 ? "scale(1)" : "scale(0.96)",
          }}
        />

        <img
          src="/viteBack.png"
          className="bg-img"
          style={{
            opacity: activeBg === 4 ? 0.06 : 0,
            transform: activeBg === 4 ? "scale(1)" : "scale(0.96)",
          }}
        />
        <img
          src="/vsCodeBack.png"
          className="bg-img"
          style={{
            opacity: activeBg === 5 ? 0.06 : 0,
            transform: activeBg === 5 ? "scale(1)" : "scale(0.96)",
          }}
        />
      </div>

      <div className="stack-container">
        <h3 className="stack-subtitle fade-up">TECNOLOGIAS QUE UTILIZO</h3>

        <div className="stack-group fade-up">
          <h4>Front-end</h4>
          <div className="stack-items">
            {stackFrontend.map((item, index) => (
              <div
                key={index}
                className="stack-item"
                onMouseEnter={() => setActiveBg(index)}
                onMouseLeave={() => setActiveBg(null)}
              >
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
                <div className="stack-hover">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="stack-group fade-up">
          <h4>Ferramentas</h4>
          <div className="stack-items">
            {stackTools.map((item, index) => (
              <div
                key={index}
                className="stack-item"
                onMouseEnter={() => setActiveBg(index + 3)}
                onMouseLeave={() => setActiveBg(null)}
              >
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
                <div className="stack-hover">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
