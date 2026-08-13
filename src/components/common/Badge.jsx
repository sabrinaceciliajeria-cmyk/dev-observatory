// Creamos un badge reutilizable para estados y etiquetas.
function Badge({ children, variant = "default" }) {
  // Definimos los estilos disponibles.
  const variants = {
    // Estilo estándar.
    default: "bg-slate-800 text-slate-300",

    // Estado positivo.
    success: "bg-emerald-500/10 text-emerald-400",

    // Estado informativo.
    info: "bg-cyan-500/10 text-cyan-400",

    // Estado de advertencia.
    warning: "bg-amber-500/10 text-amber-400",
  };

  // Renderizamos el badge.
  return (
    <span
      // Aplicamos los estilos según la variante.
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {/* Renderizamos el contenido. */}
      {children}
    </span>
  );
}

// Exportamos el componente.
export default Badge;