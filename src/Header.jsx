import Line from "./assets/images/Line.png";
import HeaderImage from "./assets/images/header.png";

function Header() {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center gap-8 sm:gap-12 relative">
        <div
          className="top flex flex-col items-center gap-7 sm:gap-8"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="big items-center justify-center mt-6">
            <h1 className="quantum text-xl sm:text-7xl text-center">
              BOOST YOUR PRODUCTIVITY
              <br />
              AI-GENERATED ASSETS
            </h1>
            <img
              src={Line}
              alt=""
              className="sm:w-[600px] w-40 sm:ml-24 sm:mt-2 ml-8"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
          </div>
          <div className="sub text-xs sm:text-lg font-normal sm:font-medium text-center justify-center gap-3">
            <p>
              Generate your work assets using{" "}
              <br className="inline-flex sm:hidden" /> AI Generated in a second
            </p>
          </div>
          <a
            href="#start"
            className="items-center bg-custom-gradient py-2 px-5 rounded-full text-xs sm:text-sm -my-4"
          >
            START GENERATING
          </a>
        </div>
        <div
          className="avatar relative"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src={HeaderImage} alt="" className="sm:w-[900px] w-80" />
          <div className="sm:px-8 sm:py-6 px-3 py-3 bg-[#222222] absolute  rounded-md sm:rounded-lg font-medium text-[5px] sm:text-sm space-y-1 sm:top-28 top-20 left-2 sm:-left-36">
            <p className="text-[#fafafa]">Command :</p>
            <p className="text-[#A7A7A7]">
              Female with orange and purple <br /> robot eyes
            </p>
          </div>
          <div className="sm:px-8 sm:py-6 px-3 py-3 bg-[#222222] absolute  rounded-md sm:rounded-lg text-[5px] sm:text-sm space-y-1 sm:top-28 top-20 right-2 sm:-right-20">
            <p className="text-center text-sm sm:text-4xl font-semibold bg-custom-gradient bg-clip-text text-transparent">
              4K
            </p>
            <p className="text-[#fafafa] text-center sm:font-medium font-normal">
              High Resolution
            </p>
          </div>
          <div className="px-5 py-4 bg-[#222222] sm:flex hidden absolute rounded-lg items-center justify-center font-medium text-sm space-y-1 top-60 -right-14">
            <p className="text-[#fafafa] text-center items-center inline-flex gap-1">
              <i class="ri-donut-chart-line ri-xl bg-custom-gradient bg-clip-text text-transparent"></i>
              Processing
            </p>
          </div>
        </div>
        <div className="gradien absolute w-full h-full bg-gradient-to-t from-[#a430cb93] to-transparent -z-50"></div>
      </header>
    </>
  );
}

export default Header;
