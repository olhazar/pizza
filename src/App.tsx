import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="pizza-app/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
