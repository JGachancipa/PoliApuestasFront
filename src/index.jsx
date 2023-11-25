import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./Application/App";

/**
 * Renderizado del aplicativo
 */
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
