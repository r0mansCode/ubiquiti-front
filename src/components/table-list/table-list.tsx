import { useNavigate } from "react-router-dom";
import { Item } from "../../models/Item";
import { LazyImage } from "../lazy-image/lazy-image";
import s from "./table-list.module.scss";

interface TableListProps {
  items: Item[];
}

export const TableList = ({ items }: TableListProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.tableContainer}>
      {!!items && (
        <table>
          <thead>
            <tr>
              <th className={s.thDevices}>{items?.length} devices</th>
              <th>Product Line</th>
              <th className={s.nameCell}>Name</th>
            </tr>
          </thead>
          <tbody>
            {!!items &&
              items.map((item) => {
                return (
                  <tr
                    key={item.id}
                    onClick={() => navigate(`device/${item.id}`)}
                  >
                    <td className={s.imgCell}>
                      <LazyImage
                        id={item.icon.id}
                        resolution={item.icon.resolutions[0]}
                      />
                    </td>
                    <td>{item.line.name}</td>
                    <td className={s.nameCell}>{item.product.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};
