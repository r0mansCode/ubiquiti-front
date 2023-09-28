import { memo } from "react";
import { Item } from "../../models/Item";
import { LazyImage } from "../lazy-image/lazy-image";
import s from "./product-item.module.scss";

interface ProductItemProps {
  item: Item;
  modifier?: string;
  onClick?: () => void;
}

export const ProductItem = memo(
  ({ item, modifier = "", onClick }: ProductItemProps) => {
    return (
      <div
        className={`${s.itemContainer} ${modifier}`}
        key={item.id}
        onClick={onClick}
      >
        <div className={s.imgContainer}>
          <LazyImage id={item.icon.id} resolution={item.icon.resolutions[2]} />
        </div>
        <div className={s.nameContainer}>
          <div className={s.productName}>{item.product.name}</div>
          <div className={s.lineName}>{item.line.name}</div>
        </div>
      </div>
    );
  }
);
