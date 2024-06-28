import React from "react";

interface CategoriesProps {
  categoryValue: number;
  onChangeCategory: (index: number) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  categoryValue,
  onChangeCategory,
}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // const [selectCategory, setSelectCategory] = React.useState<number>(0);
  // function onClickCategory(index: number) {
  //   setSelectCategory(index);
  // }

  return (
    <div className="categories">
      <ul>
        {categories.map((value: string, i: number) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryValue === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
