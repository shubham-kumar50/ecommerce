import React from 'react'

import {Product, FooterBanner, HeroBanner} from '../components';
import {client} from "../sanity/lib/client";
import { groq } from 'next-sanity';

const Home = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(groq `*[_type == "product"]`);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product: any) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
}

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData }
//   }
// }

export default Home;