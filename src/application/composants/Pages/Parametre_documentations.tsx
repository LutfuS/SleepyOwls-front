export const Doc = () => {
    return (
      <div className="bg-[#091928] min-h-screen flex flex-col items-center text-white p-4 md:p-8">
       
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">Documents recommandés</h1>
          <div className="flex flex-col space-y-4">
            <a
              href="https://cl.gy/XWop"
              className="text-blue-400 hover:text-blue-300 text-lg md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Santé mentale
            </a>
            <a
              href="https://sante.gouv.fr/IMG/pdf/Sommeil_un_carnet_pour_mieux_comprendre.pdf"
              className="text-blue-400 hover:text-blue-300 text-lg md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Un carnet pour mieux comprendre le sommeil
            </a>
            <a
              href="https://www.ameli.fr/assure/sante/themes/insomnie-adulte/vivre-insomnie#:~:text=évitez%20de%20regarder%20la%20télévision,et%20risquent%20de%20vous%20réveiller."
              className="text-blue-400 hover:text-blue-300 text-lg md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gérer son insomnie et le prévenir
            </a>
            <a
              href="https://www.inserm.fr/dossier/sommeil/"
              className="text-blue-400 hover:text-blue-300 text-lg md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se renseigner davantage sur le sujet
            </a>
          </div>
        </div>
  
    
        <div className="w-full max-w-3xl border-t border-gray-600 my-8" />
  
        
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">À propos</h2>
          <p className="text-base md:text-lg">
            Permet de vous renseigner sur le sommeil de manière à améliorer durablement votre sommeil et apprendre les bonnes habitudes.
          </p>
        </div>
      </div>
    );
  };
  