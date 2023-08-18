import React, { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    // si lorsqu'on appuye sur touche === entrer et si on a bien taper quelques chose dans l'input. Pas juste un string vide et on enlève tous les espaces à la fin .trim()
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      // console.log(e.target.value);
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        className={s.input}
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
