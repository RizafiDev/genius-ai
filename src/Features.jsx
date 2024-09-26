import Img1 from "./assets/images/features/1.png";
import Img2 from "./assets/images/features/2.png";
import Img3 from "./assets/images/features/3.png";
import Img4 from "./assets/images/features/4.png";
import Img5 from "./assets/images/features/5.png";
import Img6 from "./assets/images/features/6.png";
import Img7 from "./assets/images/features/7.png";
import Img8 from "./assets/images/features/8.png";
import Img9 from "./assets/images/features/9.png";
import Img10 from "./assets/images/features/10.png";

function Features() {
  return (
    <>
      <div
        className="container mx-auto items-center justify-center flex relative px-5"
        id="feature"
      >
        <div
          className="image-container grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-5"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img src={Img1} alt="" className="w-56 rounded-lg" />
          <img src={Img2} alt="" className="w-56 rounded-lg" />
          <img src={Img3} alt="" className="w-56 rounded-lg" />
          <img src={Img4} alt="" className="w-56 rounded-lg" />
          <img src={Img5} alt="" className="w-56 rounded-lg" />
          <img src={Img6} alt="" className="w-56 rounded-lg" />
          <img src={Img7} alt="" className="w-56 rounded-lg" />
          <img src={Img8} alt="" className="w-56 rounded-lg" />
          <img src={Img9} alt="" className="w-56 rounded-lg hidden sm:flex" />
          <img src={Img10} alt="" className="w-56 rounded-lg  hidden sm:flex" />
        </div>
        <div className="sub absolute bg-[#07001352] backdrop-blur-sm w-full flex flex-col items-center gap-2 sm:gap-4 pb-4 sm:pb-14">
          <div className="text text-4xl sm:text-8xl items-center flex flex-col justify-center -space-y-4 sm:-space-y-8">
            <h1
              className="quantum"
              data-aos="fade-bottom"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              start your
            </h1>
            <h1
              className="quantum"
              data-aos="fade-bottom"
              data-aos-duration="1500"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              ai journey
            </h1>
          </div>
          <p
            className="font-medium text-sm "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Unlock new experience with amazing AI Engine
          </p>
          <div
            className="action inline-flex items-center gap-5 font-medium"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <a
              href="#sign-in"
              className="px-6 rounded-full py-2 bg-[#fafafa3b] border-[1px] border-white  text-xs sm:text-sm "
            >
              Sign In
            </a>
            <a
              href="#sign-up"
              className="bg-custom-gradient px-6 rounded-full py-2  text-xs sm:text-sm"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Features;
