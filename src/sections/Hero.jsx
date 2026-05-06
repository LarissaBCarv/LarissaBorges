import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content" />
      <h1 className="intro">Design + Código</h1>
      <img
        className="big-logo fade-up"
        src="primaryLogoWhite.svg"
        alt="BigLogo"
      />

      <div className="line"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
      <div className="line line4"></div>
      <div className="line line5"></div>
      <div className="line line6"></div>
      <div className="line line7"></div>

      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <img src="/blop2.png" className="hero-shape" alt="" />

      <img src="/costelaAdao1.png" className="leaf leaf1" alt="" />
      <img src="/costelaAdao2.png" className="leaf leaf2" alt="" />

      <div className="spark spark1"></div>
      <div className="spark spark2"></div>
      <div className="spark spark3"></div>
      <div className="spark spark4"></div>
      <div className="spark spark5"></div>
      <div className="spark spark6"></div>
      <div className="spark spark7"></div>
      <div className="spark spark8"></div>
      <div className="spark spark9"></div>

      <img src="/mascoteHero2.png" className="mascot" alt="Mascote" />
      <h2 className="subtitle">Front-End Developer</h2>

      <div className="hero-buttons">
        <a href="#about" className="btn btn-primary">
          Sobre Mim
        </a>

        <a href="#projects" className="btn btn-secondary">
          Projetos →
        </a>
      </div>
      <img src="/mascoteMobile.png" className="hero-art" />
    </section>
  );
}
