import React from "react";

import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

interface AppContextType {
  searchValue: string;
  setSearchValue: (value: React.SetStateAction<string>) => void;
}

export const AppContext = React.createContext<AppContextType>({
  searchValue: "",
  setSearchValue: () => {},
});

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="pizza-app/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
