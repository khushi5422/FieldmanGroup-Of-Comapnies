import React from "react";
import classes from "@/styles/globalclients.module.css";

export default function Carousel() {
  ///without name slider is with name
  const fluke = [
    {
      image: "../pexels-katie-burandt-1212693.jpg",
    },
    {
      image:
        "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <>
      <div className={`${classes.slider}`}>
        <div className={`${classes.slide_track}`}>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../Inverter-Scr.jpg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../pedestal-bearing.jpg"
              alt="2 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../Inverter.jpg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../frp-washers.jpg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../AboutCompany.jpeg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../Inverter-Scr.jpg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../pedestal-bearing.jpg"
              alt="2 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../Inverter.jpg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../frp-washers.jpg"
              alt="1 slide"
            />
          </div>
          <div className={`${classes.slide}`}>
            <img
              className={`${classes.img}`}
              src="../AboutCompany.jpeg"
              alt="1 slide"
            />
          </div>
        </div>
      </div>
    </>
  );
}
