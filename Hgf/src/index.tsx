import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EnhancedTable from "./EnhancedTable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <EnhancedTable />
  </React.StrictMode>
);
