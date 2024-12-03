import React from "react";

const Button = ({ label, onClick, className, variants }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-White items-center px-10px py-16px text-[12px] rounded-lg lg:px-24px lg:py-14px lg:text-[16px]">
      {label}
    </button>
  );
};

export default Button;