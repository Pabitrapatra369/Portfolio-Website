import Link from "next/link";
import React from "react";

type Props = {};

const Project = (props: Props) => {
  return (
    <Link href="/projects/123" className=" relative h-[200px]  rounded-lg group cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 duration-300">
      <img
        src="/fourth.jpg"
        alt=""
        className=" h-full w-full rounded-lg "
        height={150}
        width={200}
      />
      <div className=" bg-violet-500 absolute top-0 left-0 h-full w-full flex justify-center items-center text-white p-4 text-xs text-center selection:rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </Link>
  );
};

export default Project;
