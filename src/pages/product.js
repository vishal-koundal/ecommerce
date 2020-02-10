import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ProductView from '../components/ProductView';
import ProductDetail from '../components/ProductDetail';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => (
  <Layout>
    <Seo title="Product" />
    <ProductView />
    <ProductDetail />
    <RelatedProducts />
  </Layout>
);

export default Product;
