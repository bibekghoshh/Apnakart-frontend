import React from "react";
import "./Loader.css"
// import Lottie from "react-lottie";
import animationData from "../../Assests/animations/24151-ecommerce-animation.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
      <section options={defaultOptions} class="paytm-loader"></section>
    </div>
  );
};

export default Loader;