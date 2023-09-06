import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit, tvShowList }) {
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() !== "") {
      onSubmit(query);
      setDropdownVisible(false);
    }
  }

  function resultData(e) {
    const value = e.target.value;
    setQuery(value);
    filter(value);
    setDropdownVisible(true);
  }
  const filter = (value) => {
    const searchTerm = value.toLowerCase();
    const filteredList = tvShowList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setRecords(filteredList);
    setError(filteredList.length === 0);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchIcon size={27} className={s.icon} />
        <div className={s.searchBar__container}>
          <input
            type="text"
            className={s.input}
            onChange={resultData}
            value={query}
            placeholder="Search a TV show you may like"
          />
          <button type="submit" className={s.search__button}>
            Search
          </button>
        </div>
      </form>
      <div className={s.search__result}>
        <div className={s.search__dropdown}>
          {query !== "" && dropdownVisible && (
            <>
              {error && <div className={s.error}>Aucune série trouvée</div>}
              {records.map((value, key) => (
                <div
                  className={`${s.search__list}${
                    value.name ? "" : s.dropdown__bg
                  }`}
                  key={key}
                >
                  <div className={s.searchResult__list}>
                    <a
                      onClick={() => {
                        onSubmit(value.name);
                      }}
                      href="#"
                      className={s.dropdown_result}
                    >
                      {value.name}
                    </a>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
