// Importamos el layout principal del dashboard.
import DashboardLayout from "./layouts/DashboardLayout";

// Creamos el componente raíz de la aplicación.
function App() {
  // Retornamos el layout principal.
  return (
    <DashboardLayout>

      {/* Contenido provisional del dashboard. */}
      <section>

        {/* Título principal. */}
        <h1 className="text-3xl font-bold text-slate-100">
          Welcome to Dev Observatory
        </h1>

        {/* Descripción inicial. */}
        <p className="mt-2 text-slate-400">
          Analyze your GitHub developer activity.
        </p>

      </section>

    </DashboardLayout>
  );
}

// Exportamos el componente raíz.
export default App;