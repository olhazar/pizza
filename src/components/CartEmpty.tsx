import React from "react";

import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/icons/empty-cart.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/pizza/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
