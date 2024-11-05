import React from 'react';


const Banner = () => {

  

    return (
    
          <div className={`hero relative  h-[450px] bg-[#9538e2] rounded-b-lg container mx-auto`}>
  <div className="hero-content text-center max-w-7xl mx-auto px-4">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl md:text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-2">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="bg-white font-bold text-[#9538e2] px-4 py-2 rounded-xl">Shop Now</button>
    </div>

   
  </div>

  <div className="hero absolute w-[700px] top-[350px] bg-banner bg-cover h-[300px] rounded-lg border-2 shadow-md"> </div>
</div>
    );
};

export default Banner;