import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-light-indigo/theme.css";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
