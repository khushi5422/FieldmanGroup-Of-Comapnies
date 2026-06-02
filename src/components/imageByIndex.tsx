export const images: string[] = [
  "bearing.webp",
  "f1.jpg",
  "glass-epoxy-frp-sheet.webp", 
  "frp-washers.jpg",
  "gates-brand-carbon-free-hose.jpg",
  "mica-washer.jpg",
  "Inverter.jpg",
  "Inverter-Scr.jpg",
  "mild-steel-tie-rod-hydraulic-cylinder.jpg",
  "pedestal-bearing.jpg"
  ];

  export const name: string[] = [
    "Bearing",
    "Inverter",
    "glass-epoxy-frp-sheet", 
    "frp-washers",
    "gates-brand-carbon-free-hose",
    "mica-washer",
    "Inverter",
    "Inverter",
    "mild-steel-tie-rod-hydraulic-cylinder",
    "pedestal-bearing"
    ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  const nameByIndex = (index: number): string => name[index % name.length]
  
  export default imageByIndex;
