import React from "react";
import { incidentData } from "../../data/data";
import Button from "../../Global/Button";
import { useNavigate } from "react-router-dom";

function Started() {
  const navigate = useNavigate()
  return (
    <section>
      <div className="container py-10">
        <div>
          <h1 className="text-[32px] font-oneast font-bold text-center">
            Let’s get started
          </h1>
          <p className="text-center max-w-[500px] mx-auto py-3 text-[16px] font-normal text-secondaryColor">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit gene
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center mt-5">
            {/* <!-- First Circle --> */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="w-[100px] md:w-[200px] lg:w-[300px] h-px bg-gray-300"></div>
            </div>

            {/* <!-- Second Circle --> */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="w-[100px] md:w-[200px] lg:w-[300px] h-px bg-gray-300"></div>
            </div>

            {/* <!-- Third Circle --> */}
            <div className="w-8 h-8 bg-primaryColor rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
        </div>
        <div className="grid place-content-center mt-5 md:mt-10">
          <div className="flex flex-col md:flex-row gap-5">
            {incidentData.map(({ id, icon, title, description }) => {
              return (
                <div key={id} className="bg-[#F4F4F5] p-3">
                  <div className="pt-5 pb-8">
                    <img src={icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[20px] max-w-[90%] font-oneast font-bold">{title}</h3>
                    <p className="text-[14px] max-w-[90%] text-secondaryColor py-2">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Button classNm="bg-primaryColor text-white font-bold mx-auto block mt-10" handleClick={()=> navigate("/incident/describe")}>Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Started;
