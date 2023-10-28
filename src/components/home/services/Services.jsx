import ServiceCard from "./ServiceCard";
const Services = ({ services }) => {
  return (
    <div className="my-10">
      <div className="title text-center space-y-6 my-10">
        <h2 className="text-prime text-lg  font-bold">Service</h2>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-darkd w-6/12 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {"don't"} look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {services?.map((service, idx) => {
          return <ServiceCard key={idx} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
