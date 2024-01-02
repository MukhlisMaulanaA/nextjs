import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/desain-sihacov.png"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Artificial Intelligence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sistem ini dibangun menggunakan bahasa pemrograman Python. Didalamnya kami menggunakan beberapa library untuk menunjang kebutuhan sistem seperti scikit-image untuk menggunakan algoritma Structural Similiarity Index Measure (SSIM)
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sistem Kendali
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Mengintegrasikan sistem dengan perangkat keras yaitu conveyor. Ketika kamera mendeteksi objek berada di tengah frame video, maka sistem akan memberi sinyal high atau low, untuk mengehentikan conveyor selama dua detik, dalam interval waktu tersebut, proses inspeksi melakukan tugasnya.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sistem Instrumentasi
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Menggunakan Lampu LED sebagai indikator ketika mendeteksi objek. Square Light digunakan untuk membantu penerangan dari kamera atau webcam yang digunakan. Sistem ini juga memiliki sensor Proximity Photoelectric, ketika sensor mendeteksi keberadaan objek maka sistem akan mulai menginspeksinya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
