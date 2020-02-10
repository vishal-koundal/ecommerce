import React from 'react';
import Products from './Products';

const RelatedProducts = () => (
  <section className="bg-white py-8">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <a
          className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
          href="/"
        >
          Related products
        </a>
      </div>
      <Products />
    </div>
  </section>
);

export default RelatedProducts;
