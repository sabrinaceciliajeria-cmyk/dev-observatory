// Creamos el contenedor principal del contenido.
function MainContent({ children }) {
  // Renderizamos el área principal.
  return (
    <main className="flex-1 bg-slate-950">

      {/* Contenedor del contenido. */}
      <div className="mx-auto w-full max-w-7xl px-6 py-8">

        {/* Renderizamos el contenido recibido. */}
        {children}

      </div>

    </main>
  );
}

// Exportamos el componente.
export default MainContent;