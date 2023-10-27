import { useLoaderData } from "react-router-dom";
import Services from "./components/home/services/Services";
import About from "./components/home/about/About";
import CallToAction from "./components/home/callToaction/CallToAction";

const App = () => {
  const services = useLoaderData();
  return (
    <div>
      <About />
      <Services services={services} />
      <CallToAction />
    </div>
  );
};

export default App;
