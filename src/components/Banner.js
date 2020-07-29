import React from "react";
import { Link } from "react-router-dom";

export const Banner = ({ bannerType }) => {
  const state = {
    home: {
      title: "Vip аренда в Минске",
      subtitle: "Аппартаменты от 89$ в сутки",
      path: "/rooms",
      btn: "Смотреть аппартаменты",
    },
    rooms: { title: "", subtitle: "", path: "/", btn: "" },
    error: {
      title: "404",
      subtitle: "Страница не найдена",
      path: "/",
      btn: "На главную",
    },
  };
  return (
    <div className="banner">
      <h1>{state[bannerType].title}</h1>
      <div></div>
      <p>{state[bannerType].subtitle}</p>
      <Link to={state[bannerType].path} className="btn-primary">
        {state[bannerType].btn}
      </Link>
    </div>
  );
};
