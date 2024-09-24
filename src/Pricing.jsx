function Pricing() {
  return (
    <>
      <div
        className="container mx-auto flex flex-col items-center justify-center gap-10"
        id="pricing"
      >
        <h1 className="font-medium text-3xl ">Boost Your AI</h1>
        <div className="card-container inline-flex sm:flex-row flex-col items-center justify-center gap-8 sm:gap-16 px-20">
          <div className="card-1 flex flex-col items-start gap-10 bg-[#424242] pt-4 pb-9 pl-9 sm:pr-32  rounded-lg sm:w-auto w-full">
            <div className="tittle space-y-3">
              <h1 className="quantum text-6xl">newbie</h1>
              <p className="">Free service for your task.</p>
            </div>
            <h1 className="font-normal text-4xl">
              $<span className="font-semibold text-6xl">0.00</span>
            </h1>
            <div className="benefit">
              <ul className="inline-flex flex-col items-start text-sm gap-4">
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>5 Credit / Day
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>500MB Storage
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>24H Customer Support
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>HD Export
                </li>
              </ul>
            </div>
            <a
              href="#sign-up"
              className="bg-[#1f1f1f] px-6 rounded-full py-2 w-fit text-sm"
            >
              Get Free
            </a>
          </div>
          {/* newww */}
          <div className="card-1 flex flex-col items-start gap-10 bg-[#0d0d0d] pt-4 pb-9 pl-9 sm:pr-32 pr-20 rounded-lg sm:w-auto w-full">
            <div className="tittle space-y-3">
              <h1 className="quantum text-6xl">veteran</h1>
              <p className="">
                Advance AI Performance, Recommend <br /> for personal used.{" "}
              </p>
            </div>
            <h1 className="font-normal text-4xl">
              $<span className="font-semibold text-6xl">4.99</span>
            </h1>
            <div className="benefit">
              <ul className="inline-flex flex-col items-start text-sm gap-4">
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Regular Service
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Up To 16GB Of Storage
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Fast Customer Support
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Unlimited Generating
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>2K Export Quality
                </li>
              </ul>
            </div>
            <a
              href="#sign-up"
              className="bg-[#1f1f1f] px-6 rounded-full py-2 w-fit text-sm"
            >
              Get Now
            </a>
          </div>
          {/* newww */}
          <div className="card-1 flex flex-col items-start gap-10 bg-custom-gradient pt-4 pb-9 pl-9 sm:pr-32 pr-14 rounded-lg sm:w-auto w-full">
            <div className="tittle space-y-3">
              <h1 className="quantum text-6xl">legends</h1>
              <p className="">
                Advance AI Performance, Recommend{" "}
                <br className="sm:inline-flex hidden" /> for personal used.{" "}
              </p>
            </div>
            <h1 className="font-normal text-4xl">
              $<span className="font-semibold text-6xl">4.99</span>
            </h1>
            <div className="benefit">
              <ul className="inline-flex flex-col items-start text-sm gap-4">
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Regular Service
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Up To 100GB Of Storage
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Priority Customer Support
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>Unlimited Generating
                </li>
                <li className="inline-flex items-center gap-1">
                  <i class="ri-check-line ri-lg"></i>4K Export Quality
                </li>
              </ul>
            </div>
            <a
              href="#sign-up"
              className="bg-[#1f1f1f] px-6 rounded-full py-2 w-fit text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
