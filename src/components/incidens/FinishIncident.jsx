import React from "react";
import ContentHeading from "../../Global/ContentHeading";
import Button from "../../Global/Button";
import { useNavigate } from "react-router-dom";
import GPS from "../../assets/images/GPS.svg"

function FinishIncident() {
  const navigate = useNavigate();
  return (
    <section>
      <ContentHeading
        headingTitle="New Incident"
        backButton={{
          state: true,
          path: "/incident/title",
        }}
        progress={true}
      >
        <Button
          handleClick={() => navigate("/location")}
          classNm="bg-primaryColor text-white font-bold"
        >
          finish
        </Button>
      </ContentHeading>
      <div className="container w-[100%] md:w-[80%] lg:w-[60%] py-5 md: lg:py-10">
        <div className="flex flex-col items-center justify-center px-4 py-5">
          <div className="w-full">
            <h1 className="text-[24px] font-oneast font-bold">
              Let’s give the incident a title?
            </h1>
            <h3 className="text-[14px] pt-3 pb-5 text-secondaryColor">
            Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide
            </h3>
          </div>
          <div>
            <img src={GPS} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinishIncident;
