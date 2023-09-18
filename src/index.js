import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import App from "./App";
import Company from "./components/Company";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import WorkExperience from "./components/Company";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Company />
    <WorkExperience />
    <Portfolio />
    <Project />
  </StrictMode>
);
