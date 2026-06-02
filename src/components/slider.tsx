import React, { useState } from "react";
import classes from "@/styles/Home.module.css";

export default function Slider() {
  const spicesimage = [
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
  const spiceNames = [
    "Furnace Assembly",
    "Melting Induction Furnace",
    "Aluminium Melting Furnace",
    "Magnetic shunt / Yoke",
    "Furnace Stanchion Assembly ",
    "Induction Furnace Coils",
    "Steel Frame Furnace Coil",
    "Furnace Top & Bottom Blocks",
    "Induction Furnace Top Block",
    "Furnace Selector Switch"
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className={`${classes.slider} mt-5 mb-4`}>
      <div className={`${classes.slide_track} ${hoveredIndex !== null && classes.paused}`}>
        {spicesimage.map((imageUrl, index) => (
          <div
            className={`${classes.slide}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              className={`${classes.img}`}
              src={imageUrl}
              alt={`image${index + 1}`}
              height={300}
              loading="lazy"
            />
            {hoveredIndex === index && <div className={`${classes.name}`}>{spiceNames[index]}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
