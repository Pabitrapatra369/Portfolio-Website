import React from "react";
import { SocialIcon } from "react-social-icons";
import Motion from "./Motion";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" bg-violet-900 w-full py-5">
      <div className=" max-w-7xl mx-auto  flex  justify-between items-center p-5">
      <Motion  delay={1} direction={"left"}>
       <div className="flex items-center space-x-6">
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://www.linkedin.com/in/pabitra-patra-558875225/"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://github.com/Pabitrapatra369"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://www.instagram.com/pkpatra_/"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="#F1F6F9"
            fgColor="#793FEF"
            className=" hover:scale-125 duration-200"
            url="https://www.facebook.com/profile.php?id=100094139532005"
          />
        </div>
       </Motion>
        <Motion delay={1} direction={"right"}>
        <p className="text-[#F1F6F9] text-xs md:text-sm">Made This Amazing FullStact Portfolio With ❤️ By Pk Patra</p>
          
        </Motion>
      </div>
    </footer>
  );
};

export default Footer;
