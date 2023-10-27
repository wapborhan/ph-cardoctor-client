import { useLoaderData } from "react-router-dom";
import Services from "./components/home/services/Services";
import About from "./components/home/about/About";

const App = () => {
  const services = useLoaderData();
  return (
    <div>
      <About />
      <Services services={services} />
    </div>
  );
};

export default App;
