"use client";

import { useState } from "react";
import MobileBarra from "./components/MobileBarra";
import DocumentosTela from "./telas/DocumentosTela";

// Importando as telas separadas

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState("home");

  return (
    <main className="min-h-screen p-8 pb-24">
      <h1 className="text-2xl font-bold mb-6">Portal do Inquilino</h1>

      {/* Caixa de conteúdo onde a tela correspondente será renderizada */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 text-amber-950">
        {abaAtiva === "documentos" && <DocumentosTela></DocumentosTela>}
      </div>

      <MobileBarra abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
    </main>
  );
}
