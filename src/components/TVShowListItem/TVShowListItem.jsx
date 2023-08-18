import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div className={s.container} onClick={() => onClick(tvShow)}>
      <img
        className={s.img}
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
