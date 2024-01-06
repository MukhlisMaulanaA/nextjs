import { Gallery } from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";

const SingleGallery = ({ gallery }: { gallery: Gallery }) => {
  const { title, image, date } = gallery;
  return (
    <>
      <div className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark" data-wow-delay=".1s">
        <Image src={image} alt="gallery1" fill/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300">
          <h1 className="title-font text-dark text-2xl font-medium text-gray-900 mb-3">{title}</h1>
          <a href="" className="text-dark">{date}</a>
          <p className="invisible leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </>
  );
};

export default SingleGallery;