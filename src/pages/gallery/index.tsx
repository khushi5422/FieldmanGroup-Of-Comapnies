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
    },
    // {
    //   img: "ginger.webp",
    //   title: "Ginger",
    //   description: "Ginger is thought to be one of the oldest known oriental spices. It is commonly used in Indian cuisine and other cuisines around the world. The Ginger family is a tropical group that lives in abundance in the Indo-Malaysian region. Ginger exports from India have been expanding rapidly in recent years. The export of ginger from India must adhere to health and quality standards."
    // },
    // {
    //   img: "staranise.webp",
    //   title: "Star Anise",
    //   description: "A little oriental tree produces the fruit known as star anise. It is star-shaped, with five to ten pointed boat-shaped portions. The hard parts are seed pods. Star anise trees are short, compact, and aesthetically pleasing. It has a licorice-like flavor. Star anise is commonly confused with anise due to their similar names and flavours, however the two spices are unrelated.",
    // },
    // {
    //   img: "cinnamon.webp",
    //   title: "Cinnamon",
    //   description: "Cinnamon is the dried bark of different laurel plants from the Cinnamomum family. True Cinnamon is the dried inner stem bark of Cinnamomum Verum. Cinnamon plants develop as shrubs. Cinnamon is derived from one of the most common trees, cassia. Cinnamon has a sweet flavor and a woody aroma in both ground and stick form. Cinnamon exports from India are increasing as the spice becomes more popular.",
    // },
    // {
    //   img: "asafoetida.webp",
    //   title: "Asafoetida",
    //   description: "Asafoetida is essentially dried sap extracted from the roots of Ferula plants. Asafoetida, which is native to Afghanistan and Iraq, is dried and processed into a spice that is used in a variety of cuisines around the world. Indian Asaexporter exports metric tons to various countries throughout the world. Besides its distinct flavor and scent, This herb provides numerous health benefits.",
    // },
    // {
    //   img: "garlic.webp",
    //   title: "Garlic",
    //   description: "Garlic is a member of the onion genus that is widely farmed around the world. India's garlic exporter exports tonnes of garlic to several countries each year. Garlic exports from India have increased as a result of its distinct flavor and aroma. This is an excellent opportunity for the Indian garlic exporter to grow his business and access the worldwide market. India exports numerous varieties of garlic.",
    // },
    // {
    //   img: "nutmeg.webp",
    //   title: "Nutmeg",
    //   description: "Nutmeg is derived from various species of the Myristica genus. Every year, Indian nutmeg exporters ship tonnes of nutmeg to other countries. The annual production of nutmeg in India is between 14,000 and 16,000 metric tons. Nutmeg exports from India have been expanding year after year. Because of the numerous uses and benefits of nutmeg in a variety of industries, Indian nutmeg exporters have a wonderful potential to export their products internationally. Nutmeg exports have increased as demand for Nutmeg has increased around the world.",
    // },
    // {
    //   img: "cumin.webp",
    //   title: "Cumin",
    //   description: "Cumin, the world's third most eaten spice, has captivated the world with its aromatic and spicy-sweet flavour. The seeds have been utilized since antiquity and are currently a staple component in many delicious cuisines around the world. Pisum is the major exporter of high-quality cumin seeds.",
    // },
    // {
    //   img: "blackpepper.webp",
    //   title: " Black Pepper",
    //   description: " Black pepper is one of the most popular spices in the world. Black pepper, which originated in South India, is now grown in many tropical regions across the world. Every year, Indian black pepper exporters send tonnes of black pepper abroad. Last year, India exported approximately 17,600 metric tons of black pepper. As a result, black pepper export provides an excellent opportunity for Indian black pepper exporters to export their products abroad and grow in the worldwide market.",
    // },
    // {
    //   img: "clove.webp",
    //   title: "Clove",
    //   description: "Cloves are primarily aromatic flower buds from the Myrtaceae family of trees. Clove exporters in India export cloves to around 149 countries worldwide. Clove exports from India have increased over the years due to the appeal of spices around the world. This is an excellent opportunity for the Indian clove exporter to build his business and export cloves internationally. India exports cloves in several types.",
    // },
    // {
    //   img: "mustardseeds.webp",
    //   title: "Mustard Seeds",
    //   description: "Mustard is largely derived from the seeds of the mustard plant. Mustard Seeds Exporter in India exports tonnes of mustard goods. Because of the numerous uses and benefits of mustard, exports of mustard seeds from India have increased. This is viewed as an excellent opportunity for the Indian Mustard Seeds exporter to grow his firm and access the international market. India exports a variety of mustard seeds.",
    // },
    // {
    //   img: "bayleaf.webp",
    //   title: "Bay Leaf",
    //   description: "The Bay leaf is fragrant and has numerous culinary applications. Every year, Indian Bay Leaf exporter exports metric tons of bay leaves abroad. The export of bay leaf from India has increased in recent years due to its numerous uses and benefits. This is an excellent opportunity for the Indian Bay Leaf exporter to grow his business and access the worldwide market. India exports a variety of bay leaf products.",
    // },
    // {
    //   img: "chilly.webp",
    //   title: "Chilly Pepper",
    //   description: "Chilli pepper is one of the most essential spices in India and around the world. Indian chillies are popular all around the world. Every year, Indian chilli pepper exporter exports metric tons of chillies to other countries. Chilli pepper is becoming increasingly famous due to its numerous culinary applications. India's Chilli Pepper exports have also increased over the years.",
    // },
    // {
    //   img: "coriander.webp",
    //   title: "Coriander",
    //   description: "Coriander seeds are plump and typically brown in color. They feature a hollow interior that contains essential oils that provide flavor to foods when cooked. Every year, the Coriander Seeds exporter in India exports large volumes of the commodity. Coriander Seeds export from India is regarded as a valuable economic opportunity for our local vendors and farmers to boost their operations and access the worldwide market. The Indian Coriander Seeds exporter ships multiple varieties of these seeds to various regions of the world. Coriander Seed exports are in high demand worldwide nowadays.",
    // },
    // {
    //   img: "mace.webp",
    //   title: "Mace",
    //   description: "Mace is actually the lacy coating, known as the aril, found on a nutmeg seed. This lacy aril is crimson in color and can be extracted by hand from the nutmeg's outer shell and dried. The Mace exporter in India exports tonnes of the product from India. Mace exports from India have increased throughout the years. This could be due to the numerous health and medical benefits of Mace. As a result, the Indian Mace exporter benefits financially from this export. Mace exports include numerous types of mace.",
    // },
    // {
    //   img: "poppyseeds.webp",
    //   title: "Poppy Seeds",
    //   description: "Poppy seed is the seed of the poppy plant. Poppy seeds, commonly known as Khus Khus, are a popular component in many Indian dishes. They have a distinctive nutty flavor and are highly recommended for adding a pleasant scent to any dish. India's poppy seed exporter exports large volumes of the product each year. Poppy Seed exports from India have increased dramatically in recent decades as the seeds have grown in favor. As a result, each year, the Indian Poppy Seed exporter exports an increasing number of products. Poppy Seed exports include a variety of products.",
    // },
    // {
    //   img: "greencardamom.webp",
    //   title: "Green Cardamom",
    //   description: "Green Cardamom is a spice with a strong, slightly sweet flavor similar to mint. Green cardamom originated in India but is now used all around the world. India's Green Cardamom exporter exports tons of cardamom abroad. Green cardamom is used in a variety of sweet and savory cuisines. For several years, India's exports of green cardamom have been increasing. This is an excellent business opportunity for an Indian exporter of green cardamom. India exports various varieties of green cardamom.",
    // },
    // {
    //   img: "greenchilly.webp",
    //   title: "Green chilli pepper",
    //   description: "Green chilli pepper is the fruit of plants in the Capsicum genus, which belongs to the Solanaceae family. Chilli peppers are used to spice up dishes in a variety of cuisines. Every year, the Green Chilli Pepper exporter in India exports tonnes of the product to a variety of countries. The export of Green Chilli pepper from India has increased over time as the product's popularity and uses have grown. This is an excellent opportunity for the Indian green chili pepper exporter to grow his firm and access the international market. India exports a wide range of Green Chilli Peppers.",
    // },
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
        <Caard spices={spices} />
        <Cardcomponent />
      </div>
    </>
  );
}

