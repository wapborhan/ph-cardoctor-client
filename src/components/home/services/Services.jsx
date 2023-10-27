import ServiceCard from "./ServiceCard";
const Services = ({ services }) => {
  return (
    <div className="container max-w-7xl mx-auto my-8">
      <div className="grid grid-cols-3 gap-4">
        {services?.map((service, idx) => {
          return <ServiceCard key={idx} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
