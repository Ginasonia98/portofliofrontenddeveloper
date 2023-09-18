import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-900 text-sm p-4 text-center">
      <div className="flex justify-between flex-col sm:flex-row items-center">
        <div>Copyright © 2023 Gina Sonia Br Tobing. All Rights reserved.</div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Policy</a>
          <a href="#">Call Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
