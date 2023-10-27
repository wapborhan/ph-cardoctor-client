import React from "react";
import TeamIg from "../../../assets/images/team/1.jpg";

const TeamCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-6 rounded-lg">
        <img
          src={TeamIg}
          //  alt={title}
          className="h-60 w-full rounded-lg"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className=" text-2xl font-bold">Car Engine Plug</h2>
        <h2 className=" text-1xl font-bold">Engine Expert</h2>
        <div className="flex justify-center gap-6">
          <div className="s">fb</div>
          <div className="s">tw</div>
          <div className="s">in</div>
          <div className="s">ins</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
