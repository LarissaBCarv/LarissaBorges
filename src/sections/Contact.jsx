import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("loading");

    emailjs
      .sendForm(
        "service_epvyf8g",
        "template_wbmqdxh",
        e.target,
        "_xQBU9sV4XQd74yx_",
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();

          setTimeout(() => {
            setStatus("");
          }, 4000);
        },
        () => {
          setStatus("error");
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTATO</h2>

        <img
          src="/mascoteContact.png"
          className="contact-mascot"
          alt="mascoteContact"
        />

        <h3 className="contact-subtitle">
          Disponível para novas oportunidades
        </h3>

        <p className="contact-text">Me chama pra gente conversar!</p>

        <form className="contact-form" onSubmit={sendEmail}>
          <input name="name" type="text" placeholder="Seu nome" required />
          <input name="email" type="email" placeholder="Seu email" required />
          <textarea name="message" placeholder="Sua mensagem..." required />

          <button type="submit" className="contact-button">
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <p className="form-message success">
              Mensagem enviada com sucesso!
            </p>
          )}

          {status === "error" && (
            <p className="form-message error">
              Erro ao enviar. Tente novamente.
            </p>
          )}
        </form>

        <div className="contact-links">
          <a
            href="https://linkedin.com/in/larissabcarvalhodev"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-btn linkedin"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>

          <a
            href="https://wa.me/55012982062403"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-btn whatsapp"
          >
            <img src="/icons/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>

        <div className="contact-line" />

        <p className="contact-copy">
          © 2026 Larissa — Desenvolvedora Front-end
        </p>
      </div>
    </section>
  );
}
