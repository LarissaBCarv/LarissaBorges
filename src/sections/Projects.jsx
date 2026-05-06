import { useEffect } from "react";
import "../styles/Projects.css";

export default function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-side");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="fade-side">PROJETOS</h2>
        <p className="projects-subtitle fade-up">
          {" "}
          Projetos focados em experiência, usabilidade e impacto real no
          usuário{" "}
        </p>
        <img src="/leaves.png" className="leavesProjects" alt="leaves" />

        <div className="featured-project fade-up">
          <video
            src="/linggo.mp4"
            className="project-video"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="project-info">
            <h3>Linggo</h3>
            <p>
              Plataforma de aprendizado de idiomas com foco em experiência e
              usabilidade.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>UI/UX</span>
              <span>Frontend</span>
            </div>
          </div>
        </div>

        <p className="coming-soon">Novos projetos em desenvolvimento</p>

        <img
          src="/mascoteProjetos.png"
          className="img-mascoteProjetos"
          alt="Mascote Projetos"
        />
      </div>
    </section>
  );
}
