import React from "react";
import Logo from "../assets/logomain.png";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const navLink = ["Home", "About Us", "Services", "Contact"];
  const socialLink = ["LinkedIn", "Facebook", "Tiktok", "Telegram"];
  return (
    <footer className="section-wrapper">
      <section className="flex flex-col md:flex-row flex-wrap md:justify-between gap-4">
        <div className="footer-logo mx-auto px-4 md:px-0 flex flex-col gap-4 flex-2">
          {/* Logo */}
          <div className=" logo-wrapper flex-shrink-0 relative z-30">
            <img
              src={Logo}
              alt="mela-tech logo"
              className="object-contain w-full h-full"
              style={{ maxWidth: 220, maxHeight: 72 }}
            />
          </div>
          {/* description */}
          <p className="text-white/80 max-w-[500px]">
            Tokenix empowers users to launch secure, scalable blockchain
            projects using powerful no-code tools and seamless Web3 integration.
          </p>
        </div>
        {/* links */}
        <div className="text-white flex flex-row flex-wrap justify-around flex-3">
          {/* page-link */}
          <div>
            <p className="font-bold mb-4">Pages</p>
            <ul className="text-white/80 flex flex-col gap-4">
              {navLink.map((link, index) => (
                <div key={index} className="">
                  <Link>{link}</Link>
                </div>
              ))}
            </ul>
          </div>
          {/* social link */}
          <div>
            <p className="font-bold mb-4">Social</p>
            <ul className="text-white/80 flex flex-col gap-4">
              {socialLink.map((link, index) => (
                <div key={index} className="">
                  <Link>{link}</Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* divider */}
      <div className="my-16 dhr">
        <hr className="text-gray-100/20 " />
        <p className="text-white/50 my-4 text-center">
          © All rights reserved. MellaTech
        </p>
      </div>
    </footer>
  );
};

export default Footer;
