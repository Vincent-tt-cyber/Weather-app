import s from "./Popup.module.scss";
import { IItem } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { IndicatorSvgSelector } from "../../assets/icons/indecators/IndecatorSvgSelector";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

interface Props {}

const Popup = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.blur}>
        <div className={s.popup}>
          <div className={s["this__day-info"]}>
            <div className={s.day}>
              <div className={s["day__temp"]}>12°</div>
              <div className={s["day__name"]}>Среда</div>
              <div className={s["day__img"]}>
                <GlobalSvgSelector id="sun" />
              </div>
              <div className={s["day__time"]}>
                Время: <span>01:54</span>
              </div>
              <div className={s["day__city"]}>
                Город: <span>Санкт-Петербург</span>
              </div>
            </div>
            <div className={s["this__day-info-items"]}>
              {items.map((item: IItem) => {
                return (
                  <div key={item.icon_id} className={s.item}>
                    <div className={s.indicator}>
                      <IndicatorSvgSelector id={item.icon_id} />
                    </div>
                    <div className={s.indicator__name}>{item.name}</div>
                    <div className={s.indicator__value}>{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.close}>
            <GlobalSvgSelector id="close" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
