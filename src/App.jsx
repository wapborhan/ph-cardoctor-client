import { useLoaderData } from "react-router-dom";
import Services from "./components/home/services/Services";

const App = () => {
  const services = useLoaderData();
  return (
    <div>
      <Services services={services} />
    </div>
  );
};

export default App;
