// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter> 
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


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


