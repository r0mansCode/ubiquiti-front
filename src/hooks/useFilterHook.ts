import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

export const useFilterHook = () => {
  const { items, itemNameFilter, itemLineFilter } = useAppSelector(
    (state) => state.dataReducer
  );

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const filteredByNameArray = items.filter((item) =>
      item.product.name.toLowerCase().includes(itemNameFilter.toLowerCase())
    );
    const lineIds = itemLineFilter.map((lineItem) => lineItem.id);
    const filteredByLineArray = filteredByNameArray.filter((item) =>
      lineIds.includes(item.line.id)
    );
    if (lineIds?.length > 0) {
      setFilteredItems(filteredByLineArray);
    }
    if (lineIds?.length < 1) {
      setFilteredItems(filteredByNameArray);
    }
  }, [itemLineFilter, itemNameFilter, items]);

  return { filteredItems };
};
