// Footer.jsx
import React from "react";
import Input from "./comment/Input";
import { IoMdSend } from "react-icons/io";
import QrCode from "../assets/QrCode.png";
import GooglePlay from "../assets/GooglePlay.png";
import appStore from "../assets/AppStore.png";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import Menu from "./comment/Menu";
const items = [
  {
    title: "Support",
    child: [
      {
        label: "lll Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
      },
      {
        label: "exclusive@gmail.com",
      },
      {
        label: "+88015-88888-9999",
      },
    ],
  },
  {
    title: "Account",
    child: [
      {
        label: " My Account",
        link: "/",
      },
      {
        label: " Login / Register",
        link: "/",
      },
      {
        label: " Cart",
        link: "/",
      },
      {
        label: "Wishlist",
        link: "/",
      },
      {
        label: "Shop",
        link: "/",
      },
    ],
  },
  {
    title: "Quick Link",
    child: [
      {
        label: "Privacy Policy",
        link: "/",
      },
      {
        label: "Terms Of Use",
        link: "/",
      },
      {
        label: "FAQ",
        link: "/",
      },
      {
        label: "Contact",
        link: "/",
      },
    ],
  },
];

function ItemsContent({ title, child }) {
  return (
    <div>
      <Menu
        label={title}
        items={child}
        childClass="text-white/80 ml-0!"
        className="xxsm:hidden block text-white"
      />
      <div className="hidden xxsm:block">
        <h3 className=" text-lg font-semibold md:mb-7 mb-3">{title}</h3>
        {child.some((c) => c.link) ? (
          <ul className="flex flex-col md:gap-3 gap-2 text-gray-300">
            {child.map((c, index) => (
              <li key={index}>
                <a href={c.link} className="hover:text-white transition-colors">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <address className="text-gray-300 not-italic flex flex-col md:gap-3 gap-2">
            {child.map((c, index) => (
              <p key={index} className="mb-2 max-w-44 leading-5 text-base ">
                {c.label}
              </p>
            ))}
          </address>
        )}
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 xxsm:grid-cols-2 lg:grid-cols-5 sm:gap-5 gap-2">
          <div className="sm:col-span-1 xxsm:col-span-2 ">
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
              <p className="text-gray-300 mb-4">Get 10% off your first order</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  inputstyle="border"
                  icon={IoMdSend}
                  iconPosition="right"
                  className="text-white border-white"
                  iconClassName="text-white"
                />
              </div>
            </div>
          </div>
          {items.map((item, index) => (
            <ItemsContent key={index} {...item} />
          ))}

          <div>
            <h3 className="text-lg font-semibold md:mb-7 mb-3">Download App</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Scan with App below User Only
            </p>
            <div className="flex gap-2">
              <div className="">
                <img src={QrCode} />
              </div>
              <div className="col-span-2 gap-2">
                <img src={GooglePlay} className="object-contain" />
                <img src={appStore} />
              </div>
            </div>

            <div className="flex md:gap-3 gap-2 mt-5 text-3xl">
              <TiSocialFacebook />
              <RiTwitterXLine />
              <FaInstagram />
              <TiSocialLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/30">
        <p>&copy; 2024 Exclusive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
