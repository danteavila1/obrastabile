import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed bottom-10 left-5 flex flex-col items-center gap-4 z-50">
      {/* Fondo semitransparente */}
      <div className="bg-black/40 p-3 rounded-2xl shadow-lg flex flex-col gap-4">
        <a
          href="https://facebook.com/tuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#fad016] transition-colors"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://instagram.com/obrastabile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#fad016] transition-colors"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#fad016] transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
