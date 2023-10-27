import React from "react";
import calender from "../../../assets/icons/calender.svg";
import phone from "../../../assets/icons/telephone.svg";
import location from "../../../assets/icons/location.svg";

const CallToAction = () => {
  return (
    <div className="my-32">
      <div className="bg-neutral-950 py-28 px-20 rounded-lg text-base-100 mx-auto">
        <div className="grid grid-cols-3">
          <div className="time">
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <img src={calender} alt="" />
              </div>
              <div className="col-span-10">
                <h2>We are open monday-friday</h2>
                <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
              </div>
            </div>
          </div>
          <div className="time">
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <img src={phone} alt="" />
              </div>
              <div className="col-span-10">
                <h2>Have a question?</h2>
                <h2 className="text-2xl font-bold">+2546 251 2658</h2>
              </div>
            </div>
          </div>
          <div className="time">
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <img src={location} alt="" />
              </div>
              <div className="col-span-10">
                <h2>Need a repair? our address</h2>
                <h2 className="text-2xl font-bold">Liza Street, New York</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
