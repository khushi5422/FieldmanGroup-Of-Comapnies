import NextJsCarousel from "@/components/carousel";
import Parallax from "@/components/parallax";
import Slider from "@/components/slider";
import Owner from "@/components/owner";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import { EmblaOptionsType } from "embla-carousel";
import ThumbnailCarousel from "@/components/thumbnailcarousal";
import Inquiry from "@/components/contactForm";
import ImageCarousal from "@/components/imagecarousal";
import Head from "next/head";
import ImageGallery from "@/components/imagegallery";
const OPTIONS2: EmblaOptionsType = {}
const SLIDE_COUNT2 = 10
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
export default function Home() {
  const handleCardClick = () => {
    alert('Button clicked inside the card!');
  };
  return (
    <>
      <Head>
        <title> Induction Furnace Coil Manufacturer,Water Cooled Cables &amp; Lead Adeptors Supplier,Exporter </title>
        <meta name="description" content="FIELDMAN INDUCTION Manufacturer, Supplier And Exporter Of Furnace Coil,Water Cooled Cables &amp; Lead Adeptors, Induction Furnace Coil, Melting Furnace Coil, Heating Furnace Spares,Induction Melting Furnace Coil,Gujarat, India" />
      </Head>
      <NextJsCarousel />
      <AboutUs />
      {/* without name slider is with name */}
      <ImageCarousal />
      <ThumbnailCarousel slides={SLIDES2} options={OPTIONS2} />
      <Services />
      
      <ImageGallery />
      <Parallax />
      <Inquiry />
      <Slider />
      <Owner />
    </>);
}
