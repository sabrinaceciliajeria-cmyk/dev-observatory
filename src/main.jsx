// Importamos StrictMode para detectar problemas durante el desarrollo
import { StrictMode } from "react";

// Importamos createRoot para montar React en el DOM
import { createRoot } from "react-dom/client";

// Importamos los estilos globales
import "./index.css";

// Importamos el componente raíz
import App from "./App.jsx";

// Buscamos el elemento HTML donde React será montado
const rootElement = document.getElementById("root");

// Creamos la raíz de React
const root = createRoot(rootElement);

// Renderizamos nuestra aplicación
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);