// Creamos un contenedor reutilizable para las páginas.
function PageContainer({ children }) {
  // Retornamos la estructura principal de la aplicación.
  return (
    // Aplicamos el fondo oscuro y el color de texto principal.
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* Limitamos el ancho máximo del contenido. */}
      <div className="mx-auto w-full max-w-7xl px-6 py-8">

        {/* Renderizamos el contenido recibido. */}
        {children}

      </div>

    </main>
  );
}

// Exportamos el componente para reutilizarlo.
export default PageContainer;