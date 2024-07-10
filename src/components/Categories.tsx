import React from "react";

type CategoriesProps = {
  categoryValue: number;
  onChangeCategory: (index: number) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ categoryValue, onChangeCategory }) => {
    const categories = [
      "Все",
      "Мясные",
      "Сырные",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

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
  }
);
