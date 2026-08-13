// Importamos la barra lateral.
import Sidebar from "../components/common/Sidebar";

// Importamos el encabezado.
import Header from "../components/common/Header";

// Importamos el contenedor principal.
import MainContent from "../components/common/MainContent";

// Creamos el layout general del dashboard.
function DashboardLayout({ children }) {
  // Renderizamos la estructura completa.
  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Barra lateral de navegación. */}
      <Sidebar />

      {/* Área principal de la aplicación. */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Encabezado superior. */}
        <Header />

        {/* Contenido dinámico. */}
        <MainContent>
          {children}
        </MainContent>

      </div>

    </div>
  );
}

// Exportamos el layout.
export default DashboardLayout;