// Importamos el componente Link de navegación que utilizaremos posteriormente.
function Sidebar() {
  // Definimos las opciones principales de navegación.
  const navigationItems = [
    // Opción principal del dashboard.
    { label: "Dashboard", icon: "📊" },

    // Opción para consultar los repositorios.
    { label: "Repositories", icon: "📁" },

    // Opción para analizar los lenguajes.
    { label: "Languages", icon: "💻" },

    // Opción para consultar la actividad.
    { label: "Activity", icon: "📈" },
  ];

  // Renderizamos la barra lateral.
  return (
    <aside className="hidden min-h-screen w-64 border-r border-slate-800 bg-slate-950 md:block">

      {/* Contenedor interno del sidebar. */}
      <div className="flex h-full flex-col p-6">

        {/* Nombre de la aplicación. */}
        <div className="mb-8">

          {/* Icono principal de la aplicación. */}
          <span className="text-2xl">
            🔭
          </span>

          {/* Nombre de la aplicación. */}
          <h1 className="mt-2 text-xl font-bold text-slate-100">
            Dev Observatory
          </h1>

          {/* Descripción corta. */}
          <p className="mt-1 text-xs text-slate-500">
            GitHub Analytics
          </p>

        </div>

        {/* Lista de navegación. */}
        <nav className="flex-1">

          {/* Recorremos las opciones de navegación. */}
          <ul className="space-y-2">

            {navigationItems.map((item) => (

              // Renderizamos cada opción de navegación.
              <li key={item.label}>

                {/* Botón visual de navegación. */}
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-slate-400 transition hover:bg-slate-900 hover:text-slate-100"
                >

                  {/* Icono de la opción. */}
                  <span>
                    {item.icon}
                  </span>

                  {/* Nombre de la opción. */}
                  <span>
                    {item.label}
                  </span>

                </button>

              </li>

            ))}

          </ul>

        </nav>

        {/* Información inferior del sidebar. */}
        <div className="border-t border-slate-800 pt-4">

          {/* Texto informativo. */}
          <p className="text-xs text-slate-500">
            Portfolio Project #02
          </p>

        </div>

      </div>

    </aside>
  );
}

// Exportamos el componente.
export default Sidebar;