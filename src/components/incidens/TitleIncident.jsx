import React from "react";
import ContentHeading from "../../Global/ContentHeading";
import Button from "../../Global/Button";
import { useNavigate } from "react-router-dom";

function TitleIncident() {
  const navigate = useNavigate();
  return (
    <section>
      <ContentHeading
        headingTitle="New Incident"
        backButton={{
          state: true,
          path: "/incident/describe",
        }}
        progress={true}
      >
        <Button
          handleClick={() => navigate("/incident/finish")}
          classNm="bg-primaryColor text-white font-bold"
        >
          Next Step
        </Button>
      </ContentHeading>
      <div className="container w-[100%] md:w-[80%] lg:w-[60%] py-5 md: lg:py-10">
        <div className="flex flex-col items-center justify-center px-4 py-5">
          <div className="w-full">
            <h1 className="text-[24px] font-oneast font-bold">
              Let’s give the incident a title?
            </h1>
            <h3 className="text-[14px] py-4 text-secondaryColor">
              Make a title that will easily identify the incidents
            </h3>
            <input
              className="w-[90%] md:w-[70%] bg-[#F4F4F5] px-2 py-3 border border-secondaryColor/20 rounded-md outline-none"
              type="text"
              placeholder="Add here title"
            />
          </div>
          <div className="w-full mt-5">
            <h1 className="text-[24px] font-oneast font-bold">
              Let’s give the incident a title?
            </h1>
            <h3 className="text-[14px] py-4 text-secondaryColor">
              Make a title that will easily identify the incidents
            </h3>
            <textarea
            placeholder="Type here"
              className="w-[90%] resize-none md:w-[70%] bg-[#F4F4F5] px-2 py-3 border border-secondaryColor/20 rounded-md outline-none"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitleIncident;
