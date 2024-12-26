import React, { useState } from "react";
import ContentHeading from "../../Global/ContentHeading";
import Button from "../../Global/Button";
import d1 from "../../assets/images/icons/d1.svg";
import d2 from "../../assets/images/icons/d2.svg";
import d3 from "../../assets/images/icons/d3.svg";
import d4 from "../../assets/images/icons/d4.svg";
import d5 from "../../assets/images/icons/d5.svg";
import d6 from "../../assets/images/icons/d6.svg";
import d7 from "../../assets/images/icons/d7.svg";
import d8 from "../../assets/images/icons/d8.svg";
import { useNavigate } from "react-router-dom";

function Btn({ children, icon, handleClick, fixedValue, value }) {
  const [isBg, setIsBg] = useState(0);

  return (
    <>
      <button
        onClick={handleClick}
        className={`gap-2 px-4 py-4 flex items-center justify-center rounded-md ${fixedValue === value ? "text-white bg-primaryColor" : "text-secondaryColor bg-[#F4F4F5]"
          }`}
      >
        <img src={icon} className="text-2xl"></img>
        <span>{children}</span>
      </button>
    </>
  );
}

function DescribeIncident() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  return (
    <section>
      <ContentHeading
        headingTitle="New Incident"
        backButton={{
          state: true,
          path: "/incident/started",
        }}
        progress={true}
      >
        <Button handleClick={() => navigate("/incident/title")} classNm="font-bold text-white bg-primaryColor">
          Next Step
        </Button>
      </ContentHeading>
      <div className="container grid place-content-center mt-5 md:mt-8 lg:mt-12">
        <div>
          <h2 className="font-oneast font-bold text-[20px] md:text-[24px]">
            Which of these best describes the incident?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:mt-8 lg:mt-12 lg:grid-cols-4">
          <Btn handleClick={() => setValue(1)} value={value} fixedValue={1} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(2)} value={value} fixedValue={2} icon={d2}>
            Biological
          </Btn>
          <Btn handleClick={() => setValue(3)} value={value} fixedValue={3} icon={d3}>
            Blizzard
          </Btn>
          <Btn handleClick={() => setValue(4)} value={value} fixedValue={4} icon={d4}>
            Cold/Freezing
          </Btn>
          <Btn handleClick={() => setValue(5)} value={value} fixedValue={5} icon={d5}>
            Drought
          </Btn>
          <Btn handleClick={() => setValue(6)} value={value} fixedValue={6} icon={d6}>
            Drought
          </Btn>
          <Btn handleClick={() => setValue(7)} value={value} fixedValue={7} icon={d7}>
            Flooding
          </Btn>
          <Btn handleClick={() => setValue(8)} value={value} fixedValue={8} icon={d8}>
            Heat Wave
          </Btn>
          <Btn handleClick={() => setValue(9)} value={value} fixedValue={9} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(10)} value={value} fixedValue={10} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(11)} value={value} fixedValue={11} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(12)} value={value} fixedValue={12} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(13)} value={value} fixedValue={13} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(14)} value={value} fixedValue={14} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(15)} value={value} fixedValue={15} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(16)} value={value} fixedValue={16} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(17)} value={value} fixedValue={17} icon={d1}>
            Avalanche
          </Btn>
          <Btn handleClick={() => setValue(18)} value={value} fixedValue={18} icon={d1}>
            Avalanche
          </Btn>
        </div>
      </div>
    </section>
  );
}

export default DescribeIncident;
