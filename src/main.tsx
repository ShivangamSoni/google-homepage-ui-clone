import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import { SiteThemeProvider } from "./context/SiteTheme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SiteThemeProvider>
            <App />
        </SiteThemeProvider>
    </React.StrictMode>
);
