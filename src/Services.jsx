import ServicesImg from "./assets/images/servicesimg.png";
import Line2 from './assets/images/Line2.png';
function Services() {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between px-72 py-28" id="service">
        <div className="left relative">
            <img src={ServicesImg} alt="" className="w-96" />
            <div className="px-5 py-4 bg-[#222222] absolute rounded-lg items-center justify-center font-medium text-sm space-y-1 top-72 -left-14">
            <p className="text-[#fafafa] text-center items-center inline-flex gap-1">
              <i class="ri-donut-chart-line ri-xl bg-custom-gradient bg-clip-text text-transparent"></i>
              Processing
            </p>
          </div>
        </div>
        <div className="right inline-flex flex-col gap-5">
            <div className="header flex flex-col items-start -space-y-6 text-7xl">
                <h1 className="quantum">generate</h1>
                <h1 className="quantum">your ai</h1>
                <h1 className="quantum">image</h1>
            </div>
            <p className="text-sm">Genius AI engine can generated a lot of ai <br /> generated images style, try it!</p>
            <a href="#sign-up" className='bg-[#1f1f1f] px-6 rounded-full py-2 w-fit text-sm'>Try Now</a>
        </div>
      </div>
    </>
  );
}
export default Services
