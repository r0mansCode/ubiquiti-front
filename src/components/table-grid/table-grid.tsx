import { useNavigate } from "react-router-dom";
import { Item } from "../../models/Item";
import { ProductItem } from "../product-item/product-item";
import s from "./table-grid.module.scss";

interface TableGridProps {
  items: Item[];
}

export const TableGrid = ({ items }: TableGridProps) => {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.itemsCount}>{items?.length} devices</div>
      <div className={s.subContainer}>
        {!!items &&
          items.map((item) => {
            return (
              <ProductItem
                item={item}
                modifier={s.productItem}
                key={item.id}
                onClick={() => navigate(`device/${item.id}`)}
              />
            );
          })}
      </div>
    </div>
  );
};
