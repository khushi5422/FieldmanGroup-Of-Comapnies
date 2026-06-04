import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from "../styles/Service.module.css";
export default function Services() {
    return (
        <section className={styles.servicesSection}>

            {/* SECTION HEADING */}

            <div className={styles.servicesHeading}>

                <span className={styles.serviceTag}>
                    OUR STRENGTH
                </span>

                <h2>
                    Why Industries Work With Us
                </h2>

            </div>

            {/* CARDS */}

            <div className={styles.servicesGrid}>

                {/* CARD 1 */}

                <Card
                    className={styles.serviceCard}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/qualityassurance.webp"
                            width={70}
                            height={70}
                            alt="Quality"
                        />
                    </div>

                    <Card.Body className={styles.cardBody}>

                        <Card.Title className={styles.cardTitle}>
                            Quality Assurance
                        </Card.Title>

                        <Card.Text className={styles.cardText}>
                            Every product undergoes strict quality inspection
                            to ensure reliable industrial performance.
                        </Card.Text>

                    </Card.Body>

                </Card>

                {/* CARD 2 */}

                <Card
                    className={styles.serviceCard}
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                    data-aos-once="true"
                >

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/truck.webp"
                            width={70}
                            height={70}
                            alt="Facility"
                        />
                    </div>

                    <Card.Body className={styles.cardBody}>

                        <Card.Title className={styles.cardTitle}>
                            Advanced Facility
                        </Card.Title>

                        <Card.Text className={styles.cardText}>
                            Equipped with modern manufacturing systems
                            for precision production and testing.
                        </Card.Text>

                    </Card.Body>

                </Card>

                {/* CARD 3 */}

                <Card
                    className={styles.serviceCard}
                    data-aos="zoom-in-up"
                    data-aos-duration="1400"
                    data-aos-once="true"
                >

                    <div className={styles.iconWrapper}>
                        <Image
                            src="/global.webp"
                            width={70}
                            height={70}
                            alt="Team"
                        />
                    </div>

                    <Card.Body className={styles.cardBody}>

                        <Card.Title className={styles.cardTitle}>
                            Expert Team
                        </Card.Title>

                        <Card.Text className={styles.cardText}>
                            Skilled engineers and technicians delivering
                            innovative industrial solutions globally.
                        </Card.Text>

                    </Card.Body>

                </Card>

            </div>

        </section>

        // <div className={`${styles.parallaxContainer}`}>
        //     <div className={`${styles.parallaxCaaardService} mt-3`}></div>
        //     <div className={`${styles.parallaxCardService}`}>
        //         <div className={`${styles.mobile} d-flex`}>
        //             <Card className={`${styles.car} border-5 border-dark rounded-0 d-flex align-items-center`}
        //              data-aos="zoom-in-right"
        //                 data-aos-duration="1000"
        //                 data-aos-once="true">
        //                 <Image src="/qualityassurance.webp" width={90} height={90} alt='Image' />
        //                 <Card.Body className={`${styles.cbody}`}>
        //                     <Card.Title className='text-center'>Quality Assurance</Card.Title>
        //                     <Card.Text className={`${styles.fonn}`}>
        //                     Ever since we have started up with our business we have focused on paying utmost attention towards the quality of our range which includes Furnace Selector Switch, 
        //                     Induction Furnace Selector Switch, Variable Frequency, AC Drive, Rotary Encoders, Proximity Sensors and other such products.
        //                     </Card.Text>
        //                 </Card.Body>
        //             </Card >
        //             <Card className={`${styles.car} border-5 border-dark rounded-0 d-flex align-items-center`}
        //             data-aos="zoom-in-left"
        //             data-aos-duration="1000"
        //             data-aos-once="true">
        //                 <Image src="/truck.webp" width={90} height={90} alt='Image' />
        //                 <Card.Body className={`${styles.cbody}`}>
        //                     <Card.Title className='text-center'>Our Facility</Card.Title>
        //                     <Card.Text className={`${styles.fonn}`}>
        //                     We have built an advanced infrastructure unit for manufacturing and developing our products as per the latest technology under one roof.
        //                     </Card.Text>
        //                 </Card.Body>
        //             </Card >
        //             <Card className={`${styles.car} border-5 border-dark rounded-0 d-flex align-items-center`}
        //             data-aos="zoom-in-right"
        //             data-aos-duration="1000"
        //             data-aos-once="true">
        //                 <Image src="/global.webp" width={90} height={90} alt='Image' />
        //                 <Card.Body className={`${styles.cbody}`}>   
        //                     <Card.Title className='text-center'>Our Team</Card.Title>
        //                     <Card.Text className={`${styles.fonn}`}>
        //                     We are really proud to have a workforce of brilliant engineers, R&D Team, Technicians, managers and other talented working staffs 
        //                     who have profound knowledge and rich experience in their specialized fields which able us to climb up ladders of desirable success.
        //                     </Card.Text>
        //                 </Card.Body>
        //             </Card >
        //         </div>
        //     </div>
        // </div>
    )
}
