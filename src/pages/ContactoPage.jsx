import bannerContacto from "../assets/imgNovedades/capacitaciones.webp";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactoPage() {
    const [enviado, setEnviado] = useState("");
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("/enviar.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.text();
      setEnviado(data); // mensaje de éxito o error
      e.target.reset();
    } catch (err) {
      setEnviado("Error al enviar el mensaje ❌");
    }
  };
  return (
    <div className="relative z-10">
      {/* Banner */}
      <div className="relative z-10 left-1/2 -translate-x-1/2 translate-y-9 w-screen bottom-43 md:bottom-38 h-[310px] md:h-[450px] lg:h-[500px] bg-[#04ab8d]">
        <img
          src={bannerContacto}
          alt="Banner Contacto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#fad016] opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
             {t("contacto.titulo")}
          </h1>
        </div>
      </div>

      {/* Datos + Mapa */}
      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {/* Datos de contacto */}
        <div className="space-y-4 text-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-white">{t("contacto.titulo")}</h2>
          <p><strong>{t("contacto.celular")}:</strong> +54 (299) 659-6682</p>
          <p><strong>Email:</strong> obrastabile@gmail.com</p>
          <p><strong>{t("contacto.direccion")}:</strong> Intendente Pons Nº 160 – Centenario - Provincia de Neuquén (8309)</p>
          <div>
            <strong>{t("contacto.redes")}:</strong>
            <div className="mt-3 flex">
              <a href="https://www.facebook.com/profile.php?id=61572605158767"
              target="_blank" 
              rel="noopener noreferrer"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:text-white dark:hover:border-primary">
                <svg width="8" height="16" viewBox="0 0 8 16" className="fill-current">
                  <path
                    d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                </svg>
              </a>
              
              <a href="https://instagram.com/obrastabile"
              target="_blank" 
              rel="noopener noreferrer"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:text-white dark:hover:border-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.25 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/company/fundacionstabile/"
              target="_blank" 
              rel="noopener noreferrer"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4 dark:border-dark-3 dark:text-white dark:hover:border-primary">
                <svg width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                  <path
                    d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.0932551773826!2d-68.12261972406647!3d-38.8303250717384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a4ac01a2ff499%3A0xf7fd172255962db5!2sInt.%20Pons%20160%2C%20Q8309%20Centenario%2C%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1760056691211!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Formulario */}
        {/* <div className="md:col-span-2 mt-10">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className="w-full p-3 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full p-3 rounded border border-gray-300"
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              required
              className="w-full p-3 rounded border border-gray-300 h-32"
            />
            <button
              type="submit"
              className="bg-[#04ab8d] text-white px-6 py-3 rounded font-bold hover:bg-[#038f7a]"
            >
              Enviar
            </button>
          </form>
          {enviado && (
            <p className="text-center mt-4 text-white">{enviado}</p>
          )}
        </div> */}
    </div>
  );
}
