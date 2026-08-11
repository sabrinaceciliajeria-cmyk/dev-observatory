// Importamos la función para definir la configuración de Vite
import { defineConfig } from "vite";

// Importamos el plugin oficial de React para Vite
import react from "@vitejs/plugin-react";

// Importamos el plugin oficial de Tailwind CSS para Vite
import tailwindcss from "@tailwindcss/vite";

// Exportamos la configuración principal de Vite
export default defineConfig({

  // Registramos los plugins que utilizará nuestro proyecto
  plugins: [

    // Permite a Vite procesar React y JSX
    react(),

    // Integra Tailwind CSS directamente con Vite
    tailwindcss(),

  ],

});