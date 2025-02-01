import { Route, Routes } from "react-router-dom";
import { layoutRoutes } from "..";
import Missing from "../../modules/Missing";

const Index = () => {
  console.log("GG ::: ", layoutRoutes);
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/" replace />} /> */}

      {[...layoutRoutes].map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default Index;
