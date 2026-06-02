import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import next from "next";
import Home from '@/styles/Home.module.css'
import { Satisfy } from "next/font/google";
const satisfyfont = Satisfy({
  weight: '400',
  subsets: ["latin"],
  display: 'fallback',
})
const NextJsCarousel = () => {
  const images = [
    {
      src: "Banner 1.jpg",
      heading: " Induction Furnace Coil  ",

    },
    {
      src: "Banner 2.jpg",
      heading: "Induction Furnace Assembly",


    },
    {
      src: "Banner 3.jpg",
      heading: " Refractory Top Cast & Bottom Cast",


    },
    {
      src: "Banner 4.jpg",
      heading: "Other such products",


    }
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageChange = (index: React.SetStateAction<number>) => {
    setSelectedImageIndex(index);
  };
  return (
      <Carousel
  className="custom"
  selectedItem={selectedImageIndex}
  onChange={handleImageChange}
  showThumbs={false}
  showStatus={false}
  showArrows={false}
  autoPlay={true}
  infiniteLoop={true}
  interval={1000}
  stopOnHover={true}>
  {images.map((image, index) => (
    <div key={index} className={`override carousel-slide slide${index + 1}`}>
      <img src={image.src} alt={`image${index + 1}`} height={0} className={`${Home.carouselhei}`} loading="lazy" />
      <div
        className={`legend animated ${index === selectedImageIndex ? "slide-active" : ""}`}
        style={{ animationDelay: `${index * 0.5}s`, animationDuration: '2000ms' }}
      >
        <h2 className={satisfyfont.className}>{image.heading}</h2>
        {/* ... rest of your legend content */}
      </div>
    </div>
  ))}
</Carousel>
  );
};
export default NextJsCarousel;
