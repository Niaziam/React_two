import React from "react";

function BlogCard({data,flexRow}) {
  return (
    <div className={`${flexRow && "flex gap-3 items-center bg-[#F4F4F5] p-2 rounded-md"} cursor-pointer group `}>
      <div className={`${flexRow && "w-[5rem] h-[5rem]"} overflow-hidden`}>
        <img className="group-hover:scale-105 transition duration-500" src={data.image} alt="" />
      </div>
      <div className="pb-2">
        <h2 className="text-[16px] font-bold">{data.title}</h2>
        <p className="text-[14px] text-secondaryColor pb-1">
          {data.description}
        </p>
        <strong>{data.price}</strong>
      </div>
    </div>
  );
}

export default BlogCard;
