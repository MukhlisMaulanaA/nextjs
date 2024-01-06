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
      image: "/images/blog/mukhlis-author.jpg",
      designation: "Software Specialist",
    },
    tags: ["programming"],
    publishDate: "2024",
    href: "/blog-details/belajar-python/",
    
  },
  {
    id: 2,
    title: "Jetson Nano Developer Kit: Platform Kecerdasan Buatan",
    paragraph:
      "Jetson Nano ini dirilis pada pertengahan 2019 mangusung tagline 'AI For Everyowne' digunakan untuk komputasi AI",
    image: "/images/blog/blog-detail-02.png",
    author: {
      name: "Mukhlis Maulana Al-Fakih",
      image: "/images/blog/mukhlis-author.jpg",
      designation: "Software Specialist",
    },
    tags: ["technology"],
    publishDate: "2024",
    href: "/blog-details/nvidia-jetson/",

  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet Consectur.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/coming-soon.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Lorem"],
    publishDate: "2025",
    href: "#",

  },
];
export default blogData;