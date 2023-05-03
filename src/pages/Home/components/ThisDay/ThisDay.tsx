import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from "./ThisDay.module.scss";

export const ThisDay = () => {
  return (
    <>
      <div className={s["this__day"]}>
        <div className={s["top__block"]}>
          <div className={s["top__block-wrapper"]}>
            <div className={s["this__temp"]}>20°</div>
            <div className={s["this__day-weekday"]}>Сегодня</div>
          </div>
          <GlobalSvgSelector id="sun" />
        </div>
        <div className={s["bottom__block"]}>
          <div className={s["this__time"]}>
            Время: <span>21:54</span>
          </div>
          <div className={s["this__city"]}>
            Город: <span>Санкт-Петербург</span>
          </div>
        </div>
      </div>
    </>
  );
};
