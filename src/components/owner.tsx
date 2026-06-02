import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from "../styles/Home.module.css";
import Image from 'next/image';


export default function Owner() {
    return (
            <div className={`${styles.parallaxContainer}`}>
                <div className={`${styles.parallaxCaaard} ${styles.parallaxowner} mt-3`}></div>
                <div className={`${styles.parallaxCard}`}>
                    <Card style={{ backgroundColor: '#ffffff82', minHeight: '300px' , minWidth: '820px' }} className='border-4 border-white '>
                        <Card.Body className='p-4'>
                            <Card.Text>
                                We initially started our journey around 11 years back as M/S FIELDMAN CONTROL SYSTEM but after achieving a successful growth of our company we came up with our another new venture named 
                                Fieldman Induction which was formed in the year 2014 .We are a proud manufacturer, supplier and exporter of an extensive range of Furnace Coil, Induction Furnace Coil, 
                                Induction Furnace Assembly, Refractory Top Cast & Bottom Cast, Furnace Selector Switch, Input Switch, Switch Blades, Hydraulic Power Pack, Heating Furnace Spares and other such products. 
                                We have fabricated these products using the best quality components so that we can easily serve to the high market demands. 
                                These products find their usage and application in several industries including petrochemical, iron, steel, glass industries, plastic industries aerospace and many more places.
                            </Card.Text>
                            {/* <div className='d-flex gap-2 justify-content-bottom flex-column'>
                                <Image src="" width={80} height={80} className='rounded-circle' alt='iiimage' />
                                <div style={{ paddingLeft: '3vw' }}>
                                    <h2>DARSHIL PATEL</h2>
                                    <p></p>
                                </div>
                            </div> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
    )
}
