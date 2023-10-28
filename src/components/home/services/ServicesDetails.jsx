import { useLoaderData, NavLink } from "react-router-dom";

const ServicesDetails = () => {
  const services = useLoaderData();
  const { _id, img, title, price } = services;
  console.log(services);
  return (
    <div className="my-10">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="content">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h4>{price}</h4>
            <NavLink to={`/checkout/${_id}`} className="btn bg-prime">
              Proceed Checkout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
