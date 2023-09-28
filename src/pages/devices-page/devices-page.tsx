import { TableGrid } from "../../components/table-grid/table-grid";
import { TableList } from "../../components/table-list/table-list";
import { Toolbar } from "../../components/toolbar/toolbar";
import { useFilterHook } from "../../hooks/useFilterHook";
import { useAppSelector } from "../../hooks/redux";
import { Layouts } from "../../constants/constants";

export const DevicesPage = () => {
  const { filteredItems } = useFilterHook();
  const { layout, isLoading, error } = useAppSelector(
    (state) => state.dataReducer
  );

  const canRender = !isLoading && !error;

  return (
    <div>
      <Toolbar />
      {error && <h1>Oooops, something wrong with the data...</h1>}
      {isLoading && <h1>...Loading</h1>}
      {layout === Layouts.LIST && canRender && (
        <TableList items={filteredItems} />
      )}
      {layout === Layouts.GRID && canRender && (
        <TableGrid items={filteredItems} />
      )}
    </div>
  );
};
