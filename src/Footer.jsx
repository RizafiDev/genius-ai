import Logo from "./assets/images/logo.png";

function Footer() {
  return (
    <>
      <div className="container mx-auto pb-10 px-10 sm:px-20 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-14 sm:gap-0">
        <div className="left flex flex-col items-start justify-start">
          <div className="brand ">
            <a
              href=""
              className="font-semibold sm:text-3xl text-xl inline-flex items-center gap-3"
            >
              <img src={Logo} alt="" srcset="" className="sm:w-10 w-6" />
              Genius AI
            </a>
          </div>
          <p className="font-normal text-lg sm:text-2xl">
            Change Command To Amazing
            <br />
            Visuals
          </p>
          <p className="font-medium text-lg mt-20 sm:inline-flex hidden">
            ©2024 RizafiDev || All Right Reserved
          </p>
        </div>
        <div className="right flex flex-col justify-between items-center">
          <div className="link sm:flex grid grid-cols-2 items-start gap-10 jus">
            <ul className="inline-flex items-start flex-col gap-3">
              <li className="font-semibold">
                <a href="">Explore</a>
              </li>
              <li className="text-gray-400">
                <a href="">AI Tools & Feature</a>
              </li>
              <li className="text-gray-400">
                <a href="">Pricing</a>
              </li>
            </ul>
            <ul className="inline-flex items-start flex-col gap-3">
              <li className="font-semibold">
                <a href="">Support</a>
              </li>
              <li className="text-gray-400">
                <a href="">Help Center</a>
              </li>
              <li className="text-gray-400">
                <a href="">Community Forum</a>
              </li>
            </ul>
            <ul className="inline-flex items-start flex-col gap-10 ">
              <li className="font-semibold -mb-3">
                <a href="">Get App</a>
              </li>
              <li className="">
                <a
                  href=""
                  className="space-x-2 border-[1px] border-gray-200 p-3 rounded-full px-4"
                >
                  <i class="ri-windows-fill ri-xl"></i>
                  <span className="font-medium">Windows</span>
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="space-x-2 border-[1px] border-gray-200 p-3 rounded-full px-4"
                >
                  <i class="ri-apple-fill ri-xl"></i>
                  <span className="font-medium">MacOs</span>
                </a>
              </li>
            </ul>
          </div>
          <p className="font-medium flex items-center justify-center sm:hidden mt-14 mb-3">
            ©2024 RizafiDev || All Right Reserved
          </p>
          <div className="font-normal text-sm sm:mt-20 items-center justify-center flex gap-6 sm:right-0">
            <p className="text-gray-500">Cookies</p>
            <p className="text-gray-500">Privacy & Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
