import Logo from "./assets/images/logo.png";
import "./index.css";

function Nav() {
  const hamburgerToggle = () => {
    const nav = document.getElementById("nav-link");
    nav.classList.toggle("hidden");
  };

  return (
    <>
      <div
        className="navbar container mx-auto py-5 px-4 sm:px-20 flex items-center justify-between relative z-50"
        id="home"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="brand ">
          <a
            href=""
            className="font-semibold sm:text-3xl text-xl inline-flex items-center gap-3"
          >
            <img src={Logo} alt="" srcset="" className="sm:w-10 w-6" />
            Genius AI
          </a>
        </div>
        <div className="hamburger sm:hidden">
          <button onClick={hamburgerToggle}>
            <i class="ri-menu-3-line ri-lg"></i>
          </button>
        </div>
        <div className="nav-item hidden sm:inline-block">
          <ul className="font-medium text-lg inline-flex items-center gap-14 h-5">
            <li>
              <a href="#home" className="hover-underline-animation">
                Home
              </a>
            </li>
            <li>
              <a href="#feature" className="hover-underline-animation">
                Feature
              </a>
            </li>
            <li>
              <a href="#service" className="hover-underline-animation">
                Service
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover-underline-animation">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover-underline-animation">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className="nav-item hidden absolute top-20 left-0 w-full"
          id="nav-link"
        >
          <ul className="font-normal text-base inline-flex flex-col items-center gap-4 py-5 w-full h-full bg-[#070013] z-50">
            <li>
              <a href="#home" className="hover-underline-animation">
                Home
              </a>
            </li>
            <li>
              <a href="#feature" className="hover-underline-animation">
                Feature
              </a>
            </li>
            <li>
              <a href="#service" className="hover-underline-animation">
                Service
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover-underline-animation">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover-underline-animation">
                Contact
              </a>
            </li>
            <li className="flex items-center w-full justify-around">
              <a href="#contact" className="hover-underline-animation">
                <i class="ri-login-circle-line mr-2"></i>Sign In
              </a>
              <a href="#contact" className="hover-underline-animation">
                <i class="ri-user-add-line mr-2"></i>Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className="action sm:inline-flex items-center gap-10 text-lg font-medium hidden">
          <a href="#sign-in" className="">
            Sign In
          </a>
          <a
            href="#sign-up"
            className="border-2 border-purple-600 px-5 rounded-full py-2"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
