import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Sistem Inspeksi Alat Kesehatan menggunakan Computer Vision pada proses Quality Control."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
