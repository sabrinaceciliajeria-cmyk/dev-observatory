// Creamos el componente principal de nuestra aplicación
function App() {

  // Retornamos la interfaz que verá el usuario
  return (

    // Contenedor principal que ocupa toda la pantalla
    <main className="min-h-screen bg-slate-950">

      {/* Centramos el contenido horizontal y verticalmente */}
      <div className="flex min-h-screen items-center justify-center">

        {/* Título principal de nuestra aplicación */}
        <h1 className="text-5xl font-bold text-white">

          {/* Nombre de nuestro proyecto */}
          Dev Observatory 🚀

        </h1>

      </div>

    </main>
  );
}

// Exportamos el componente principal
export default App;