import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud-image.png";
import { ThisDayInfoItem } from "./ThisDayInfoItem";
import { IndicatorSvgSelector } from "../../../../assets/icons/indecators/IndecatorSvgSelector";

export interface IItem {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = () => {
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
      <div className={s["this__day-info"]}>
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
        <img className={s.cloud__image} src={cloud} alt="Cloud" />
      </div>
    </>
  );
};
