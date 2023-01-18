import "@css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Home from "@pages/Home";
import Navigation from "@components/Navigation";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
