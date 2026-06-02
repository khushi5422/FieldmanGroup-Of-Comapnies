import React from 'react';
import Home from '@/styles/Home.module.css'

export default function ImageGallery() {
  return (
      // <div className={`${Home.gallery_column} mt-5`}>
      <div className='container'>
      <div className={`d-flex col mt-5 `}>
        {/* <div className={`${Home.gallery_row}`}> */}
        <div className='row p-2 text-center'>
          <img src="slide 1.jpg" alt="Fieldman induction"  loading="lazy"/>
          <h1> Fieldman Control System</h1> 
          </div>
        <div className='row p-2 text-center'>
          <img src="slide 2.jpg" alt="Fieldman induction"  loading="lazy"/>
          <h1> Fieldman Induction</h1> 
          </div>
        <div className='row p-2 text-center'>
          <img src="slide 3.jpg" alt="Fieldman induction"  loading="lazy"/>
          <h1> Fieldman Sensors</h1> 
          </div>
        <div className='row p-2 text-center'>
          <img src="slide 1.jpg" alt="Fieldman induction"  loading="lazy"/>
          <h1> Fieldman Groups</h1> 
          </div>
        </div>
        </div>
              
       
             
     
  );
};

