// Importamos el layout principal.
import DashboardLayout from "./layouts/DashboardLayout";

// Importamos la página principal.
import Dashboard from "./pages/Dashboard";

// Creamos el componente raíz.
function App() {
  // Montamos el layout y la página.
  return (
    <DashboardLayout>

      {/* Mostramos el dashboard. */}
      <Dashboard />

    </DashboardLayout>
  );
}

// Exportamos el componente raíz.
export default App;