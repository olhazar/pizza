import React from "react";

import { Categories } from "../components/Categories";
import { MainCard } from "../components/MainCard";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/MainCard/Skeleton";

import axios from "axios";
import "../scss/app.scss";

interface SortType {
  name: string;
  sortProperty: string;
}

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
  const [selectCategory, setSelectCategory] = React.useState<number>(0);
  const [selectSort, setSelectSort] = React.useState<SortType>({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const sortBy = selectSort.sortProperty.replace("-", "");
    const order = selectSort.sortProperty.includes("-") ? "asc" : "desc";
    const category = selectCategory > 0 ? `category=${selectCategory}` : "";

    setIsLoading(true);
    axios
      .get(
        `https://667ec7dbf2cb59c38dc70152.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectCategory, selectSort]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryValue={selectCategory}
          onChangeCategory={(i: number) => setSelectCategory(i)}
        />
        <Sort sortValue={selectSort} onChangeValue={(i) => setSelectSort(i)} />
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
