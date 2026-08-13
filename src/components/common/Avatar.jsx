// Creamos un avatar reutilizable para perfiles.
function Avatar({
  // Iniciales que mostraremos si no existe una imagen.
  initials = "SC",

  // URL opcional de la imagen.
  src,

  // Texto alternativo de la imagen.
  alt = "Developer avatar",
}) {
  // Si existe una imagen, mostramos la imagen.
  if (src) {
    return (
      <img
        // URL de la imagen.
        src={src}

        // Texto alternativo.
        alt={alt}

        // Estilos visuales.
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  // Si no existe imagen, mostramos las iniciales.
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-300">
      {/* Mostramos las iniciales. */}
      {initials}
    </div>
  );
}

// Exportamos el componente.
export default Avatar;