import { useEffect } from "react";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Linggo",

      description:
        "Plataforma de aprendizado de idiomas com foco em experiência intuitiva, interface moderna e usabilidade.",

      video: "/linggo.mp4",

      tags: ["React", "UI/UX", "Frontend"],
    },

    {
      title: "Lúmina Studio",

      description:
        "Landing page premium desenvolvida para uma clínica estética fictícia, com foco em design minimalista, experiência sofisticada e responsividade.",

      video: "/luminaStudio.mp4",

      tags: ["React", "Responsive", "UI Design"],
    },
  ];

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
          Projetos focados em experiência, usabilidade e impacto real no usuário
        </p>

        <img src="/leaves.png" className="leavesProjects" alt="leaves" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="featured-project fade-up" key={index}>
              <video
                src={project.video}
                className="project-video"
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
