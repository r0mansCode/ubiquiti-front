import s from "./app-header.module.scss";
import logo from "../../assets/images/Ubiquiti_logo.png";
import { Outlet, useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.logoSection}>
          <img src={logo} className={s.logo} onClick={() => navigate("/")} />
          <div>Devices</div>
        </div>
        <div className={s.authorSection}>Author/Romans Kovalenoks</div>
      </div>
      <Outlet />
    </>
  );
};
