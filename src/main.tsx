import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

createRoot(document.getElementById('') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)