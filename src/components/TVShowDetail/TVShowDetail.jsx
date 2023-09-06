import React from "react";
import s from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating.jsx/FiveStarRating";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.first_air_date}>
        First air date : {tvShow.first_air_date}
      </div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={s.rating}>{rating} / 5</div>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
