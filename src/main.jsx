import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AnnouncementProvider } from "./context/AnnouncementContext";  // Import the provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnnouncementProvider>
      <App /> {/* No BrowserRouter here, since it's handled in App.jsx */}
    </AnnouncementProvider>
  </React.StrictMode>
);


