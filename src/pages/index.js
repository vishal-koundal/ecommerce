import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HomeStore from '../components/HomeStore';
import HomeAbout from '../components/HomeAbout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          <Hero />
          <HomeStore />
          <HomeAbout />
        </div>
      </Layout>
    );
  }
}
