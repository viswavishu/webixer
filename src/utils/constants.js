import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'To create a better everyday life for the many people, this is the Webixer vision. Our mission as a business is to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them. Our vision also goes beyond home furnishing.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our mission for 2022 is to help 20 million customers to create a beautiful home. Our diversified and profitable business model will enable us to achieve this. I thank our investors for their confidence in our team and for their support in the implementation of our plans.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Selling household goods like pens, wallets and picture frames. Småland, the landscape where Ingvar grew up, was stony and rugged. Back then, many of the inhabitants had to get by with small means, making as much as possible with next to nothing.',
  },
]


//  export const products_url = 'https://course-api.com/react-store-products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`


//custom api

 export const products_url = 'https://myserverless.netlify.app/api/airtable'

 export const single_product_url = `https://myserverless.netlify.app/api/products?id=`
