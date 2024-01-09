import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Teams = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Meet Our Team's"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-60" src="/images/team/ari.jpg" alt="Ari" loading="lazy" width="640" height="805"/>
              <div>
                <h4 className="text-2xl font-semibold">Ari Fahrezi</h4>
                <span className="block text-sm text-gray-500">Control Engineer</span>
              </div>
          </div>
          <div className="space-y-4 text-center">
            <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" src="/images/team/mukhlis.png" alt="Mukhlis" loading="lazy" width="1000" height="667"/>
              <div>
                <h4 className="text-2xl font-semibold">Mukhlis Maulana Al-Fakih</h4>
                <span className="block text-sm text-gray-500">Software Engineer</span>
              </div>
          </div>
          <div className="space-y-4 text-center">
            <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-60" src="/images/team/firgi.jpg" alt="Firgi" loading="lazy" width="1000" height="667"/>
              <div>
                <h4 className="text-2xl font-semibold">Firgi Aditya</h4>
                <span className="block text-sm text-gray-500">Instrument Engineer</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;