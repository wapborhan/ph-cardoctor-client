import React from "react";
import aboutPerson from "../../../assets/images/about_us/person.jpg";
import aboutParts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="mt-10 mb-32">
      <div className="grid grid-cols-2 gap-40">
        <div className="about-left">
          <div className="relative">
            <div className="image1">
              <img src={aboutPerson} alt="" className="rounded-lg " />
            </div>
            <div className="absolute -bottom-36 -right-28 border-4 rounded-lg shadow-md border-neutral-50">
              <img src={aboutParts} alt="" className="w-80" />
            </div>
          </div>
        </div>
        <div className="about-right space-y-5">
          <h2 className="text-xl text-prime font-bold">About Us</h2>
          <h2 className="text-5xl font-bold w-8/12 py-5">
            We are qualified & of experience in this field
          </h2>
          <p className="text-darkd leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-darkd leading-8">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <a className="py-3 px-5 inline-block rounded-md bg-prime text-lg text-neutral-50">
            Get More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
