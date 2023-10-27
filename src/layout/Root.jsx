import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="container max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
