import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux";
import { useEffect } from "react";
import { fetchItems } from "./store/reducers/ActionCreators";
import { DevicesPage } from "./pages/devices-page/devices-page";
import { SingleDevicePage } from "./pages/single-device-page/single-device-page";
import { AppHeader } from "./components/app-header/app-header";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<AppHeader />}>
          <Route index element={<DevicesPage />} />
          <Route path='/device/:deviceId' element={<SingleDevicePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
