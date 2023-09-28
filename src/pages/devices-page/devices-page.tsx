import { TableGrid } from "../../components/table-grid/table-grid";
import { TableList } from "../../components/table-list/table-list";
import { Toolbar } from "../../components/toolbar/toolbar";
import { useFilterHook } from "../../hooks/useFilterHook";
import { useAppSelector } from "../../hooks/redux";
import { Layouts } from "../../constants/constants";

export const DevicesPage = () => {
  const { filteredItems } = useFilterHook();
  const { layout } = useAppSelector((state) => state.dataReducer);

  return (
    <div>
      <Toolbar />
      {layout === Layouts.LIST && <TableList items={filteredItems} />}
      {layout === Layouts.GRID && <TableGrid items={filteredItems} />}
    </div>
  );
};
