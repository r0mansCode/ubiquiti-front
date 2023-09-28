import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Line } from "../../../models/Item";
import {
  addLineToFilter,
  removeLineFromFilter,
} from "../../../store/reducers/ActionCreators";
import { SVGIcon } from "../../svg-icon/svg-icon";
import s from "./filter-modal.module.scss";

interface FilterModalProps {
  hadnleClick: () => void;
}

export const FilterModal = ({ hadnleClick }: FilterModalProps) => {
  const dispatch = useAppDispatch();
  const { productLines, itemLineFilter } = useAppSelector(
    (state) => state.dataReducer
  );

  const isChecked = (id: string) => {
    return itemLineFilter.some((item) => item.id === id);
  };

  const handleCheckboxClick = (item: Line) => {
    if (isChecked(item.id)) {
      dispatch(removeLineFromFilter(item.id));
    }
    if (!isChecked(item.id)) {
      dispatch(addLineToFilter(item));
    }
  };

  return (
    <div className={s.filterModalContainer}>
      <div className={s.filterModalHeader}>
        <div>Filter</div>
        <SVGIcon
          iconName={"closeIcon"}
          className={s.closeIcon}
          onClick={hadnleClick}
        />
      </div>
      <div className={s.filterModalTitle}>Product Line</div>
      <div className={s.linesList}>
        {!!productLines &&
          productLines.map((product) => {
            return (
              <div className={s.lineListItem} key={product.id}>
                <input
                  type='checkbox'
                  id={product.id}
                  className={s.lineCheckbox}
                  checked={isChecked(product.id)}
                  onChange={() => handleCheckboxClick(product)}
                />
                <label htmlFor={product.id}>{product.name}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};
