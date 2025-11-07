// PortalModal.jsx
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PortalModal({ isOpen, onClose, children }) {
  const backdropRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    // Bloquear scroll del body
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Cerrar con ESC
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Asegurarse de que existe document (evita errores SSR)
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onMouseDown={(e) => {
        // Cerrar si se hace click en el backdrop (no en el contenido)
        if (e.target === backdropRef.current) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-lg">
        {children}
      </div>
    </div>,
    document.body
  );
}
