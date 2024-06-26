import React from "react";

import { Categories } from "../components/Categories";
import { MainCard } from "../components/MainCard";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/MainCard/Skeleton";

import axios from "axios";
import "../scss/app.scss";

interface Item {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

export const Home = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("https://aaabaa187f195ebe.mokky.dev/items")
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <MainCard key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
