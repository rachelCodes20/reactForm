import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Form />);
