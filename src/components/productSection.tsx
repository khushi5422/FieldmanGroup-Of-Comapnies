'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Product from '@/styles/ProductsSection.module.css';

const productCategories = [
    {
        category: 'Steel Products',

        products: [
            {
                name: 'Slide Gate Refractories',
                image: '/valves.jpg',
                link: '/gallery',
            },
            {
                name: 'Casting Powder',
                image: '/pedestal-bearing.jpg',
                link: '/gallery',
            }
        ],
    },

    {
        category: 'Foundry Equipments',

        products: [
            {
                name: 'Casting Powder',
                image: '/pedestal-bearing.jpg',
                link: '/gallery',
            }

        ],
    },

    {
        category: 'Induction Systems',

        products: [
            {
                name: 'Tundish Boards',
                image: '/Inverter-Scr.jpg',
                link: '/gallery',
            },
            {
                name: 'Slide Gate Refractories',
                image: '/valves.jpg',
                link: '/gallery',
            },
            {
                name: 'Slide Gate Refractories',
                image: '/pedestal-bearing.jpg',
                link: '/gallery',
            }
        ],
    },
];

export default function ProductsSection() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={Product.productsSection}>
            {/* LEFT SIDE CATEGORY TABS */}

            <div className={Product.leftPanel}>

                {productCategories.map((item, index) => (

                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`${Product.categoryBtn} ${activeTab === index ? Product.activeCategory : ''
                            }`}
                    >
                        {item.category}
                    </button>

                ))}

            </div>

            {/* RIGHT SIDE PRODUCTS */}

            <div className={Product.rightPanel}>

                <div className={Product.productsGrid}>

                    {productCategories[activeTab].products.map((product, index) => (

                        <Link
                            href={product.link}
                            key={index}
                            className={Product.productCard}
                        >

                            <div className={Product.imageWrapper}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={Product.productImage}
                                />
                            </div>

                            <div className={Product.cardContent}>
                                <h3>{product.name}</h3>
                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
         
    );
}