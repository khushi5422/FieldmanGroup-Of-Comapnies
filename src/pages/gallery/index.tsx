import Caard from '@/components/Caard';
import Head from 'next/head';
import Cardcomponent from "@/components/cardcomponent";

interface Spice {
  img: string;
  title: string;
  description: string;
}
export default function GalleryPage() {
  const spices : Spice [] = [
    {
      img: "frp-washers.jpg",
      title: "Furnace Stanchion Assembly",
      description: "We offer Magnetic Yoke/ shunt for Steel shall induction furnace with highest 15MT capacity of furnace. We are having in-house manufacturing capacity for all induction furnace spare parts.."
    }
  ];
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Fieldman Groups" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "ItemList",
            "itemListElement": spices.map((spice, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": spice.title,
                "image": spice.img,
                "description": spice.description,
                "brand": {
                  "@type": "Brand",
                  "name": "Fieldman Groups"}}}))})}
        </script>
      </Head>
      <div>
        {/* <Caard spices={spices} /> */}
        <Cardcomponent />
      </div>
    </>
  );
}

