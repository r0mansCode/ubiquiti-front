import s from "./app-header.module.scss";
import logo from "../../assets/images/Ubiquiti_logo.png";
import { Outlet } from "react-router-dom";

export const AppHeader = () => {
  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.logoSection}>
          <img src={logo} />
          <div>Devices</div>
        </div>
        <div className={s.authorSection}>Author/Romans Kovalenoks</div>
      </div>
      <Outlet />
    </>
  );
};
