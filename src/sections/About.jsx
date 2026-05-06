import { useEffect } from "react";
import "../styles/About.css";

export default function About() {
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
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-card">
          <div className="about-photo">
            <img src="/larissaBorges1.jpeg" alt="Larissa Borges" />
          </div>
          <img src="/mascoteFoto.png" alt="" className="about-mascot" />
        </div>

        <div className="about-text">
          <h2 className="fade-side">SOBRE MIM</h2>
          <p className="fade-up">
            Gosto de transformar ideias em interfaces intuitivas, funcionais e
            visualmente bem resolvidas. Uno design e desenvolvimento para criar
            experiências digitais que fazem sentido para quem usa. Meu foco está
            em UI/UX e front-end, com atenção à usabilidade, estética e clareza.
          </p>
        </div>
      </div>
    </section>
  );
}
