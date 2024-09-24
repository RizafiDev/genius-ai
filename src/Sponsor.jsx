import Gpt from "./assets/images/gpt.png";
import Nvidia from "./assets/images/nvidia.png";
import Google from "./assets/images/google.png";
import { useEffect } from "react";

function Sponsor() {
  useEffect(() => {
    const brandContainer = document.getElementById("brand-container");
    const logos = brandContainer.innerHTML; // Simpan isi dari brand-item

    // Fungsi untuk menduplikasi konten brand-item agar terus bergerak
    const duplicateLogos = () => {
      const totalWidth = brandContainer.scrollWidth; // Mendapatkan lebar total dari semua elemen logo
      let currentWidth = brandContainer.offsetWidth;

      // Duplicasi sampai melebihi kontainer aslinya
      while (currentWidth < totalWidth * 4) {
        brandContainer.innerHTML += logos; // Duplicate isi dari brand-item
        currentWidth += totalWidth;
      }
    };

    // Panggil fungsi saat komponen pertama kali dimuat
    duplicateLogos();
  }, []);
  return (
    <>
      <div className="container mx-auto  items-center flex flex-col py-6 sm:py-16 gap-6">
        <h1
          className="font-medium sm:text-3xl text-lg"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Powered By :
        </h1>
        <div
          className="brand w-full overflow-hidden"
          id="box"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            id="brand-container"
            className="brand-item flex items-center animate-scroll space-x-12 justify-center sm:space-x-48"
          >
            <img src={Gpt} alt="" className="sm:h-11 h-8" />
            <img src={Nvidia} alt="" className="sm:h-11 h-6" />
            <img src={Google} alt="" className="sm:h-11 h-6" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sponsor;
