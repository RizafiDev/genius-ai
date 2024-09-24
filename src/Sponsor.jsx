import Gpt from "./assets/images/gpt.png";
import Nvidia from "./assets/images/Nvidia.png";
import Google from "./assets/images/Google.png";
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
      <div className="container mx-auto justify-center items-center flex flex-col py-16 gap-6">
        <h1
          className="font-medium text-3xl "
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay=""
        >
          Powered By :
        </h1>
        <div
          className="brand w-full overflow-hidden"
          id="box"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div
            id="brand-container"
            className="brand-item flex items-center animate-scroll space-x-48"
          >
            <img src={Gpt} alt="" className="h-11" />
            <img src={Nvidia} alt="" className="h-11" />
            <img src={Google} alt="" className="h-11" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sponsor;
