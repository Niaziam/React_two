import React, { useState } from "react";
import ContentHeading from "../Global/ContentHeading";
import Button from "../Global/Button";
import { blogData } from "../data/data";
import BlogCard from "../Global/BlogCard";
import { CiCamera, CiImageOn } from "react-icons/ci";
import uploadIcon from "../assets/images/upload.svg";

function Dashboard() {
  const [isChat, setIsChat] = useState(false);
  return (
    <div className="">
      <ContentHeading
        headingTitle="Dashboard"
        isSearch={true}
        isSort={true}
        buttonTitle="Cyper"
      >
        <Button classNm="bg-primaryColor text-white text-semibold">
          Cyper AI
        </Button>
      </ContentHeading>
      <div className="container grid grid-cols-2 md: md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 my-5 md:my-8 lg:my-10">
        {blogData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
      <div className="container">
        {isChat && (
          <div className="flex fixed bottom-[6rem] right-[3rem]  flex-col max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-orange-500 text-white text-lg font-semibold py-3 px-4">
              Chat with Cypher
            </div>
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                  Lorem ipsum dolar sit general sac mascho werho
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                  Lorem ipsum dolar sit general sac mascho werho
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-lg max-w-xs">
                  Lorem ipsum dolar sit general sac mascho werho
                </div>
              </div>
            </div>
            <div className="flex items-center p-3 border-t border-gray-200">
              <input
                type="text"
                placeholder="Enter your question..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="flex justify-between px-2 py-2">
              <div className="flex items-center gap-2 text-3xl">
                <CiCamera className="cursor-pointer" />
                <CiImageOn className="cursor-pointer" />
                <img
                  className="cursor-pointer"
                  src={uploadIcon}
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <button className="ml-3 bg-orange-500 text-white px-4 py-2 rounded-full">
                Send
              </button>
            </div>
          </div>
        )}

        <button onClick={() => setIsChat(!isChat)} className="w-[50px] h-[50px] bg-primaryColor fixed bottom-[3rem] text-white text-xl rounded-full right-[5rem]">
          C
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
