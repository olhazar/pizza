import React from "react";

export const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [selectCategory, setSelectCategory] = React.useState<number>(0);

  function onClickCategory(index: number) {
    setSelectCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((value: string, i: number) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={selectCategory === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
