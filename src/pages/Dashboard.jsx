// Importamos la tarjeta reutilizable.
import Card from "../components/common/Card";

// Importamos el badge.
import Badge from "../components/common/Badge";

// Creamos la página principal del dashboard.
function Dashboard() {
  // Renderizamos el contenido.
  return (
    <section>

      {/* Encabezado del dashboard. */}
      <div>

        {/* Título. */}
        <h1 className="text-3xl font-bold text-slate-100">
          Developer Overview
        </h1>

        {/* Descripción. */}
        <p className="mt-2 text-slate-400">
          GitHub developer analytics.
        </p>

      </div>

      {/* Grid de estadísticas. */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Estadística de repositorios. */}
        <Card>

          <p className="text-sm text-slate-500">
            Repositories
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-100">
            0
          </p>

        </Card>

        {/* Estadística de estrellas. */}
        <Card>

          <p className="text-sm text-slate-500">
            Stars
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-100">
            0
          </p>

        </Card>

        {/* Estadística de forks. */}
        <Card>

          <p className="text-sm text-slate-500">
            Forks
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-100">
            0
          </p>

        </Card>

        {/* Estado de la API. */}
        <Card>

          <p className="text-sm text-slate-500">
            API Status
          </p>

          <div className="mt-3">
            <Badge variant="success">
              Ready
            </Badge>
          </div>

        </Card>

      </div>

    </section>
  );
}

// Exportamos la página.
export default Dashboard;