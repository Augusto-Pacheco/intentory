import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Provider from "./pages/Provider";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="provider" element={<Provider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
