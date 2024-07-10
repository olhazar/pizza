import React from "react";

import { setSearchValue } from "../../redux/filter/filterSlice";
import { useDispatch } from "react-redux";

import debounce from "lodash.debounce";
import s from "./Search.module.scss";

import searchIcon from "../../assets/icons/search-icon.svg";
import close from "../../assets/icons/delete-icon.svg";

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

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
