import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../../assets/icons/indecators/IndecatorSvgSelector";
import { IItem } from "./ThisDayInfo";

interface IThisDayInfoItemProps {
  item: IItem;
}

export const ThisDayInfoItem = (item: IThisDayInfoItemProps) => {
  const { icon_id, name, value } = item;

  return (
    <>
      <div className={s.item}>
        <IndicatorSvgSelector id={icon_id} />
        <div className={s.indicator__name}>{name}</div>
        <div className={s.indicator__value}>{value}</div>
      </div>
    </>
  );
};
