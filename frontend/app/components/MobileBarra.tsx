interface MobileBarraProps {
  abaAtiva: string;
  setAbaAtiva: (aba: string) => void;
}

export default function MobileBarra({
  abaAtiva,
  setAbaAtiva,
}: MobileBarraProps) {
  // Função auxiliar para definir a classe visual dependendo se o botão está ativo
  const getBtnClass = (nomeAba: string) => {
    const ativo = abaAtiva === nomeAba;
    return `flex flex-col items-center gap-1.5 transition-colors ${
      ativo
        ? "text-amber-950 font-bold scale-105"
        : "text-amber-900/70 hover:text-amber-950"
    }`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 sm:hidden z-50">
      <div className="bg-amber-500 rounded-2xl border-2 border-amber-700 py-3 px-2 shadow-lg flex justify-around items-center text-xs">
        <button
          onClick={() => setAbaAtiva("home")}
          className={getBtnClass("home")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          Home
        </button>

        <button
          onClick={() => setAbaAtiva("agendamentos")}
          className={getBtnClass("agendamentos")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          Agendamentos
        </button>

        <button
          onClick={() => setAbaAtiva("pagamentos")}
          className={getBtnClass("pagamentos")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            ></path>
          </svg>
          Pagamentos
        </button>

        <button
          onClick={() => setAbaAtiva("documentos")}
          className={getBtnClass("documentos")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          Documentos
        </button>

        <button
          onClick={() => setAbaAtiva("outros")}
          className={getBtnClass("outros")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          Outros
        </button>
      </div>
    </div>
  );
}
