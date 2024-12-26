import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContentHeading from "../../Global/ContentHeading";
import Button from "../../Global/Button";
import { blogData } from "../../data/data";
import BlogCard from "../../Global/BlogCard";

function IncidentHome() {
  const navigate = useNavigate();
  return (
    <section>
      <ContentHeading
        headingTitle="Incidents"
        isSearch={true}
        isSort={true}
        buttonTitle="Cyper"
      >
        <Button
          handleClick={() => navigate("/incident/started")}
          classNm="bg-primaryColor text-white text-semibold flex items-center jsutify-center gap-2"
        >
          <FaPlus />
          New Incident
        </Button>
      </ContentHeading>
      <div className="container grid grid-cols-2 md: md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 my-5 md:my-8 lg:my-10">
        {blogData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
}

export default IncidentHome;
