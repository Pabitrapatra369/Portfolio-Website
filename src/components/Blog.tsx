import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className=" text-violet-800 cursor-pointer hover:text-pink-600 ">
        Why Learning TypeScript is Important in 2023
      </p>
      <p className=" text-sm text-violet-500 hidden md:block">2023/09/05</p>
    </div>
  );
};

export default Blog;
