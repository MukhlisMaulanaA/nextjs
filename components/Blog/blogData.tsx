import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Belajar Pemrograman Python: Pengenalan Dasar Python",
    paragraph:
      "Apa itu Python ? . Mau belajar bahasa pemrograman Python, tapi masih bingun mulainya dari mana?",
    image: "/images/blog/blog-detail-01.png",
    author: {
      name: "Mukhlis Maulana Al-Fakih",
      image: "/images/blog/author-01.png",
      designation: "Software Specialist",
    },
    tags: ["programming"],
    publishDate: "2024",
    href: "/blog-details/blog1/",
    
  },
  {
    id: 2,
    title: "Jetson Nano Developer Kit: Platform Kecerdasan Buatan",
    paragraph:
      "Jetson Nano ini dirilis pada pertengahan 2019 mangusung tagline 'AI For Everyowne' digunakan untuk komputasi AI",
    image: "/images/blog/blog-detail-02.png",
    author: {
      name: "Mukhlis Maulana Al-Fakih",
      image: "/images/blog/author-02.png",
      designation: "Software Specialist",
    },
    tags: ["technology"],
    publishDate: "2024",
    href: "/blog-details/blog2/",

  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
    href: "/blog-details/blog3/",

  },
];
export default blogData;