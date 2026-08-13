// Creamos una tarjeta reutilizable para mostrar información.
function Card({ children, className = "" }) {
  // Renderizamos la tarjeta.
  return (
    <div
      // Combinamos los estilos base con estilos adicionales.
      className={`rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm ${className}`}
    >
      {/* Renderizamos el contenido recibido. */}
      {children}
    </div>
  );
}

// Exportamos el componente.
export default Card;