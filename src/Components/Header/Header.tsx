import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";
import Select from "react-select";

const Header = () => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      hight: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };
  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSvgSelector id="header-logo" />
          </div>
          <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
          <div className={s["change__theme"]}>
            <GlobalSvgSelector id="change-theme" />
            <Select
              defaultValue={options[0]}
              styles={colorStyles}
              options={options}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
