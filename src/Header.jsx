import Line from "./assets/images/Line.png";
import HeaderImage from "./assets/images/header.png";

function Header() {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center justify-center gap-12 relative">
        <div
          className="top flex flex-col items-center gap-8"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="2000"
          data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
        >
          <div className="big items-center justify-center mt-6">
            <h1 className="quantum text-7xl text-center">
              BOOST YOUR PRODUCTIVITY
              <br />
              AI-GENERATED ASSETS
            </h1>
            <img src={Line} alt="" className="w-[600px] ml-24 mt-2" data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="3000"
          data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" />
          </div>
          <div className="sub text-lg font-medium text-center justify-center gap-3">
            <p>Generate your work assets using AI Generated in a second</p>
          </div>
          <a
            href="#start"
            className="items-center bg-custom-gradient py-2 px-5 rounded-full text-sm -my-4"
          >
            START GENERATING
          </a>
        </div>
        <div
          className="avatar relative"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
        >
          <img src={HeaderImage} alt="" className="w-[900px] " />
          <div className="px-8 py-6 bg-[#222222] absolute rounded-2xl font-medium text-sm space-y-1 top-28 -left-36">
            <p className="text-[#fafafa]">Command :</p>
            <p className="text-[#A7A7A7]">
              Female with orange and purple <br /> robot eyes
            </p>
          </div>
          <div className="px-8 py-6 bg-[#222222] absolute rounded-2xl items-center justify-center font-medium text-sm space-y-1 top-24 -right-20">
            <p className="text-center text-4xl font-semibold bg-custom-gradient bg-clip-text text-transparent">
              4K
            </p>
            <p className="text-[#fafafa] text-center">High Resolution</p>
          </div>
          <div className="px-5 py-4 bg-[#222222] absolute rounded-lg items-center justify-center font-medium text-sm space-y-1 top-60 -right-14">
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
