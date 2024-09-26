import Trek from "./assets/images/trek.png";
import Dragon from "./assets/images/dragon.png";

function Tagline() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center py-11 relative my-16">
        <div className="content flex flex-col sm:items-center justify-center gap-4 pb-6 px-9">
          <img
            src={Dragon}
            alt=""
            className="w-44 sm:hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
          <div
            className="header text-5xl sm:text-7xl flex flex-col items-start sm:items-center justify-center -space-y-3 sm:-space-y-6"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="quantum">boost your</h1>
            <h1 className="quantum">creative</h1>
          </div>
          <p
            className="text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Change your minutes into a amazing AI Generated images!
          </p>
          <a
            href="#start"
            className="items-center bg-custom-gradient py-2 px-5 rounded-full text-sm w-fit mt-4 sm:mt-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            START GENERATING
          </a>
        </div>
        <div className="fade w-full h-full absolute bg-gradient-to-b from-[#a430cb3c] to-transparent -z-50"></div>
        <div className="fade w-full h-full absolute bg-gradient-to-t from-[#30cb713f] to-transparent -z-50"></div>
        <div className="image sm:flex items-center justify-center absolute bottom-0 space-x-[700px] hidden">
          <img
            src={Trek}
            alt=""
            className="h-[28rem]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
          <img
            src={Dragon}
            alt=""
            className="h-[28rem]"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
      </div>
    </>
  );
}
export default Tagline;
