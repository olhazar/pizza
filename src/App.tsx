import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { MainCard } from "./components/MainCard";
import { Sort } from "./components/Sort";
import "./scss/app.scss";
import pizzas from "./assets/json/pizzas.json";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <MainCard key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
