export default function FloatingMenu() {
  return (
    <div className="floating-menu">
      <div className="menu-trigger">☰</div>

      <div className="menu-palette">
        <a href="#header" className="floating-item">
          <img src="/btnHome.png" alt="Header" />

          <span className="floating-tooltip">Início</span>
        </a>

        <a href="#about" className="floating-item">
          <img src="/btnAbout.png" alt="Sobre" />

          <span className="floating-tooltip">Sobre</span>
        </a>

        <a href="#projects" className="floating-item">
          <img src="/btnProjects.png" alt="Projetos" />

          <span className="floating-tooltip">Projetos</span>
        </a>

        <a href="#resume" className="floating-item">
          <img src="/btnResume.png" alt="Resumo" />

          <span className="floating-tooltip">Resumo</span>
        </a>

        <a href="#tech" className="floating-item">
          <img src="/btnTech.png" alt="Tecnologias" />

          <span className="floating-tooltip">Tecnologias</span>
        </a>

        <a href="#contact" className="floating-item">
          <img src="btnContact.png" alt="Contato" />

          <span className="floating-tooltip">Contato</span>
        </a>
      </div>
    </div>
  );
}
