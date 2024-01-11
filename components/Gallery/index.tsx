import SectionTitle from "../Common/SectionTitle";
import SingleGallery from "./SingleGallery";
import galleryData from "./galleryData";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Gallerys Room"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {galleryData.map((gallery) => (
            <div key={gallery.id} className="w-full">
              <SingleGallery gallery={gallery} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;