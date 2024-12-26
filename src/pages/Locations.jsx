import React from "react";
import ContentHeading from "../Global/ContentHeading";
import Button from "../Global/Button";
import { FaPlus } from "react-icons/fa";
import { locationData } from "../data/data";
import locationimage from "../assets/images/icons/location.svg";
import cost from "../assets/images/location/cost.svg";
import BlogCard from "../Global/BlogCard";
import map from "../assets/images/location/map.svg";
import d3 from "../assets/images/location/l3.svg";

function LoactionCard({ subTitle, image, title }) {
  return (
    <>
      <div className="flex items-center gap-2 py-4">
        <div className="bg-secondaryColor/20 p-2 rounded-full">
          <img src={image} height={20} width={20} alt="" />
        </div>
        <div>
          <h3 className="text-[12px] md:text-[14px] font-normal text-secondaryColor">
            {subTitle}
          </h3>
          <h1 className="text-[16px] md:text-[20px] font-bold font-oneast">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}

function Locations() {
  const blogData = [
    {
      image: d3,
      title: "Activity name",
      description: "Location name 16.12212, -122.1424",
      price: "$1,456,654.00",
    },
    {
      image: d3,
      title: "Activity name",
      description: "Location name 16.12212, -122.1424",
      price: "$1,456,654.00",
    },
  ];
  const documentData = [
    {
      image: d3,
      title: "Doucment name",
      description: "Location name 16.12212, -122.1424",
      price: "$1,456,654.00",
    },
    {
      image: d3,
      title: "Document name",
      description: "Location name 16.12212, -122.1424",
      price: "$1,456,654.00",
    },
  ];
  return (
    <section>
      <ContentHeading
        headingTitle="DR-4699 March 2023 Severe Storms"
        isSearch={true}
        isSort={true}
      >
        <Button classNm="flex items-center justify-center bg-primaryColor text-white gap-2">
          <FaPlus />
          New Location
        </Button>
      </ContentHeading>
      <div className="container py-5 md:py-8 lg:py-12 flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12">
        <div className="flex-1">
          <LoactionCard
            title="Tulare County,  Los Angles, CA 23415"
            subTitle="location"
            image={locationimage}
          />
          <LoactionCard
            title="Tulare County,  Los Angles, CA 23415"
            subTitle="Approx. Cost:"
            image={cost}
          />
          <hr />
          <div className="py-3">
            <h3 className="text-[14px] font-bold">Description</h3>
            <p className="my-3 text-xs md:text-sm text-secondaryColor">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>
          <hr />
          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locationData.map((data) => (
              <BlogCard key={data.id} data={data} />
            ))}
          </div>
          <hr />
          <div className="mt-3 md:mt-5 lg:mt-10 ">
            <div className="flex justify-between items-center">
              <h4 className="font-bold">Activities</h4>
              <button className="underline">See all</button>
            </div>
            <div className="mt-5 space-y-3">
              {blogData.map((data, index) => (
                <BlogCard key={index} data={data} flexRow={true} />
              ))}
            </div>
          </div>
          <hr />
          <div className="mt-3 md:mt-5 lg:mt-10">
            <div className="flex justify-between items-center">
              <h4 className="font-bold">Documents</h4>
              <button className="underline">See all</button>
            </div>
            <div className="mt-5 space-y-3">
              {documentData.map((data, index) => (
                <BlogCard key={index} data={data} flexRow={true} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-secondaryColor font-oneast my-3">Incident Map</h1>
          <div className="">
            <img src={map} alt="" />
          </div>
          <h2 className="text-secondaryColor mt-2">
            Start 19.1232, -118.233 End 19.3245, -119.2323
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Locations;
