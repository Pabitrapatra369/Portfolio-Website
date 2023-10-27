import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" bg-violet-900 w-full py-5">
      <div className=" max-w-7xl mx-auto  flex  justify-between items-center p-5">
        <div className="flex items-center space-x-6">
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://facebook.com"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://twitter.com"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://twitter.com"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://twitter.com"
          />
        </div>
        <p className="text-[#F1F6F9] text-xs md:text-sm">Made This Amazing FullStact Portfolio With ❤️ By Pk Patra</p>
      </div>
    </footer>
  );
};

export default Footer;
