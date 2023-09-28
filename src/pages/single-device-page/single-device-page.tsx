import s from "./single-device-page.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { selectItemById } from "../../store/reducers/DataSlice";
import { useAppSelector } from "../../hooks/redux";
import { LazyImage } from "../../components/lazy-image/lazy-image";
import { Item } from "../../models/Item";
import { SVGIcon } from "../../components/svg-icon/svg-icon";

export const SingleDevicePage = () => {
  const { deviceId } = useParams();
  const navigate = useNavigate();
  const device = useAppSelector((state) => selectItemById(state, deviceId));

  const deviceInformationList = (device: Item) => [
    { name: "Product Line", info: device.line.name },
    { name: "ID", info: device.line.id },
    { name: "Name", info: device.product.name },
    { name: "Short Name", info: device.shortnames[0] },
    {
      name: "Max. power",
      info: device.unifi?.network.radios.na.maxPower,
      unit: "W",
    },
    {
      name: "Speed",
      info: device.unifi?.network.radios.na.maxSpeedMegabitsPerSecond,
      unit: "Mbps",
    },
    { name: "Number of ports", info: device.unifi?.network.ports?.standard },
  ];

  return (
    <>
      {!!device && (
        <div>
          <div className={s.singleDeviceNav}>
            <div className={s.singleDeviceTitle}>{device.product.name}</div>
            <SVGIcon
              iconName='backIcon'
              onClick={() => navigate(-1)}
              className={s.singleDeviceBackIcon}
            />
          </div>
          <div className={s.deviceContainer}>
            <div className={s.deviceSubContainer}>
              <LazyImage
                id={device.icon.id}
                resolution={device.icon.resolutions[4]}
              />
              <div className={s.infoContainer}>
                {deviceInformationList(device).map(
                  (row) =>
                    !!row.info && (
                      <div className={s.infoRow} key={row.name}>
                        <div>{row.name}</div>
                        <div>
                          {row.info}&nbsp;{row.unit}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
