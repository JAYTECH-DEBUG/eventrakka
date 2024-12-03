import React from "react";
import heroimage from "../assets/Rectangle 49.png";
import Button from "../components/button";



const Herosection = () => {
  return (
    <div className="px-[20px] pt-[20px] flex  flex-col lg:flex-row lg:items center lg:justify-between lg:px-[114px] lg:pt-[40px] item center">
      {/*cta text */}
    <div className=" text-center lg:text-left lg:w-[550px] xl:w-[600px] lg:pr-[40px]">
    
        {/*welcome to event trakka  */}
        <div  className="bg-mountain px-[4px] py-[2px] text-center rounded-full mt-[20px] lg:w-[365px]">
        <h2 className="text-[12px] lg:text-[14px] xl:text-[18px] text-primaryLight font-bold">welcome to event trakka
        </h2>
        </div>
     
       
        {/*cta action first text  */}
        <div>
        <h2 className="text-[20px] l:text[36px] xl:text-[56px]  font-bold mt-2 text-center lg:text-left">Seamless Event Management Made Effortless</h2>
        </div>
        {/* cta smaller text  */}

      <h6 className="text-[12px] lg:text-[16px] xl:text[18px] font-medium text-center lg:text-left">
        Getting Informations About Tech Event In Ekiti Just in One Place.
        All-in-one tech event resource
      </h6>
      <Button label="See upcoming events"> </Button>
    </div>
      <div>
        <img src={heroimage} alt="" />
      </div>

    </div>
  );
};

export default Herosection;