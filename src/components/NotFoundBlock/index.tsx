import s from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1>
        <span>
          🥺
          <br />
          Ничего не найдено
        </span>
      </h1>
      <p className={s.description}>
        К сожалению данная страница отсутствует в нашем магазине
      </p>
    </div>
  );
};
