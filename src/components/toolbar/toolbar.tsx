import s from "./toolbar.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  filterItems,
  switchTableLayout,
} from "../../store/reducers/ActionCreators";
import { SVGIcon } from "../svg-icon/svg-icon";
import { FilterModal } from "./filter-modal/filter-modal";
import { useState } from "react";
import { Layouts } from "../../constants/constants";

export const Toolbar = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { itemNameFilter, layout } = useAppSelector(
    (state) => state.dataReducer
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(filterItems(value));
  };

  return (
    <div className={s.toolbarContainer}>
      <section className={s.toolbarFirstSec}>
        <SVGIcon iconName={"searchIcon"} className={s.searchIcon} />
        <input
          className={s.searchInput}
          placeholder='Search'
          name='deviceSearch'
          value={itemNameFilter || ""}
          onChange={handleChange}
        />
        <SVGIcon
          iconName={"closeIcon"}
          className={s.closeIcon}
          onClick={() => dispatch(filterItems(""))}
        />
      </section>
      <section className={s.toolbarSecondSec}>
        <div className={s.listIconContainer}>
          <SVGIcon
            iconName={layout === Layouts.LIST ? "activeListIcon" : "listIcon"}
            onClick={() => dispatch(switchTableLayout(Layouts.LIST))}
          />
        </div>
        <SVGIcon
          iconName={layout === Layouts.GRID ? "activeGridIcon" : "gridIcon"}
          onClick={() => dispatch(switchTableLayout(Layouts.GRID))}
        />
        <div>
          <div onClick={() => setFilterOpen(true)} className={s.filterOpener}>
            Filter
          </div>
          {filterOpen && (
            <FilterModal hadnleClick={() => setFilterOpen(false)} />
          )}
        </div>
      </section>
    </div>
  );
};
