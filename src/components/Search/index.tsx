import React from "react";
import debounce from "lodash.debounce";

import { AppContext } from "../../App";

import searchIcon from "../../assets/icons/search-icon.svg";
import close from "../../assets/icons/delete-icon.svg";
import s from "./Search.module.scss";

export const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(AppContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current?.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 150),
    []
  );

  return (
    <div className={s.root}>
      {" "}
      <img src={searchIcon} className={s.icon} />{" "}
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={s.input}
        placeholder="Поиск ..."
      />
      {value && <img onClick={onClickClear} src={close} className={s.close} />}
    </div>
  );
};
