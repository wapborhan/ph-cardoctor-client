import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  // console.log(service);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-6 rounded-lg">
        <img src={img} alt={title} className="h-60 w-full rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <div className="flex justify-between">
          <div className="proce text-lg font-bold text-prime">
            Price : ${price}
          </div>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
