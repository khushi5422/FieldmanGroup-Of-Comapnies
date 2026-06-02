import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from "../styles/Home.module.css";
export default function Services() {
    return (
            <div className={`${styles.parallaxContainer}`}>
                <div className={`${styles.parallaxCaaardService} mt-3`}></div>
                <div className={`${styles.parallaxCardService}`}>
                    <div className={`${styles.mobile} d-flex`}>
                        <Card className={`${styles.car} border-5 border-dark rounded-0 d-flex align-items-center`}
                         data-aos="zoom-in-right"
                            data-aos-duration="1000"
                            data-aos-once="true">
                            <Image src="/qualityassurance.webp" width={90} height={90} alt='Image' />
                            <Card.Body className={`${styles.cbody}`}>
                                <Card.Title className='text-center'>Quality Assurance</Card.Title>
                                <Card.Text className={`${styles.fonn}`}>
                                Ever since we have started up with our business we have focused on paying utmost attention towards the quality of our range which includes Furnace Selector Switch, 
                                Induction Furnace Selector Switch, Variable Frequency, AC Drive, Rotary Encoders, Proximity Sensors and other such products.
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        <Card className={`${styles.car} border-5 border-dark rounded-0 d-flex align-items-center`}
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-once="true">
                            <Image src="/truck.webp" width={90} height={90} alt='Image' />
                            <Card.Body className={`${styles.cbody}`}>
                                <Card.Title className='text-center'>Our Facility</Card.Title>
                                <Card.Text className={`${styles.fonn}`}>
                                We have built an advanced infrastructure unit for manufacturing and developing our products as per the latest technology under one roof.
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        <Card className={`${styles.car} border-5 border-dark rounded-0 d-flex align-items-center`}
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        data-aos-once="true">
                            <Image src="/global.webp" width={90} height={90} alt='Image' />
                            <Card.Body className={`${styles.cbody}`}>   
                                <Card.Title className='text-center'>Our Team</Card.Title>
                                <Card.Text className={`${styles.fonn}`}>
                                We are really proud to have a workforce of brilliant engineers, R&D Team, Technicians, managers and other talented working staffs 
                                who have profound knowledge and rich experience in their specialized fields which able us to climb up ladders of desirable success.
                                </Card.Text>
                            </Card.Body>
                        </Card >
                    </div>
                </div>
            </div>
    )
}
