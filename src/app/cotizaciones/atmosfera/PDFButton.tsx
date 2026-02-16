"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { FileDown, Loader2 } from "lucide-react";
import CotizacionPDF from "./CotizacionPDF";

export default function PDFButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<CotizacionPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Cotizacion_SIGE_Atmosfera_2026.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm rounded-lg font-medium transition-colors cursor-pointer disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <FileDown size={16} />
          Descargar PDF
        </>
      )}
    </button>
  );
}
