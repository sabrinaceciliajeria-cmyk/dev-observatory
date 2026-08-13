// Creamos el encabezado principal de la aplicación.
function Header() {
  // Renderizamos la estructura del header.
  return (
    <header className="border-b border-slate-800 bg-slate-950">

      {/* Contenedor interno del header. */}
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">

        {/* Grupo izquierdo del header. */}
        <div className="flex items-center gap-3">

          {/* Botón provisional para navegación móvil. */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-900 hover:text-slate-100 md:hidden"
            aria-label="Abrir menú de navegación"
          >
            ☰
          </button>

          {/* Información de la sección actual. */}
          <div>

            {/* Título principal. */}
            <h2 className="text-lg font-semibold text-slate-100">
              Developer Overview
            </h2>

            {/* Descripción secundaria. */}
            <p className="hidden text-xs text-slate-500 sm:block">
              GitHub profile analytics
            </p>

          </div>

        </div>

        {/* Área derecha del header. */}
        <div className="flex items-center gap-3">

          {/* Indicador de conexión. */}
          <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">

            {/* Indicador visual de estado. */}
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            {/* Estado de GitHub. */}
            GitHub connected

          </div>

          {/* Avatar provisional. */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-300">
            SC
          </div>

        </div>

      </div>

    </header>
  );
}

// Exportamos el componente.
export default Header;