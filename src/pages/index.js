import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Store from '../components/Store';
import HomeAbout from '../components/HomeAbout';
import Tabsss from '../components/Tabsss';
import ProductDetail from '../components/ProductDetail';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          <Hero />
          <Store />
          <HomeAbout />
          <ProductDetail />
        </div>
      </Layout>
    );
  }
}
