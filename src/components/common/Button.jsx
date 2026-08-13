// Creamos un botón reutilizable para toda la aplicación.
function Button({
  // Texto o contenido que aparecerá dentro del botón.
  children,

  // Variante visual del botón.
  variant = "primary",

  // Función que se ejecutará al hacer click.
  onClick,

  // Tipo HTML del botón.
  type = "button",
}) {
  // Definimos las variantes visuales disponibles.
  const variants = {
    // Botón principal de la aplicación.
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400",

    // Botón secundario.
    secondary:
      "bg-slate-800 text-slate-100 hover:bg-slate-700",

    // Botón con apariencia de borde.
    outline:
      "border border-slate-700 text-slate-300 hover:bg-slate-800",
  };

  // Renderizamos el botón.
  return (
    <button
      // Definimos el tipo HTML.
      type={type}

      // Asociamos la función recibida.
      onClick={onClick}

      // Aplicamos estilos comunes y la variante seleccionada.
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${variants[variant]}`}
    >
      {/* Renderizamos el contenido del botón. */}
      {children}
    </button>
  );
}

// Exportamos el componente.
export default Button;