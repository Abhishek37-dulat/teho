import { Route, Routes } from "react-router-dom";
import LayoutRoutes from "./routes/LayoutRoutes/LayoutRoutes";

function App() {
  return (
    <Routes>
      <Route path="*" element={<LayoutRoutes />} />
    </Routes>
  );
}

export default App;
