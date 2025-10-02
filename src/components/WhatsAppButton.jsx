import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492996596682"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}