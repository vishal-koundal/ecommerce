import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ProductView from '../components/ProductView';
import ProductDetail from '../components/ProductDetail';

const Product = () => (
  <Layout>
    <Seo title="Product" />
    <ProductView />
    <ProductDetail />
  </Layout>
);

export default Product;
