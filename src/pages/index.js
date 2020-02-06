import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Store from '../components/Store';
import HomeAbout from './HomeAbout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          <Hero />
          <Store />
          <HomeAbout />
        </div>
      </Layout>
    );
  }
}
