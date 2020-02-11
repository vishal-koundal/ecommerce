import React from 'react';
import styled from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductAdditionalInfo from './ProductAdditionalInfo';
import ReviewForm from './ReviewForm';

const Container = styled.div`
  ul,
  li {
    border: none;
    box-shadow: none;
    :focus {
      box-shadow: none;
    }
  }
  button {
    :focus {
      border-bottom: 1px solid #cbd5e0;
    }
  }
`;

export default () => (
  <Container className="container mx-auto text-left md:text-center ">
    <Tabs>
      <TabList className="grid md:flex justify-start md:justify-center">
        <Tab>
          <button type="" className="pb-1 focus:outline-none">
            Description
          </button>
        </Tab>
        <Tab>
          <button type="" className="pb-1 focus:outline-none">
            Additional Information
          </button>
        </Tab>
        <Tab>
          <button type="" className="pb-1 focus:outline-none">
            Reviews{' '}
          </button>
        </Tab>
      </TabList>
      <TabPanel>
        <div className="flex px-4 py-6 justify-center">
          <div className="w-full md:w-3/4  text-left leading-loose text-gray-700">
            <h2>
              Authentic keffiyeh master cleanse. Fingerstache semiotics PBR
              quinoa. Pop-up Godard kale chips, trust fund Neutra fingerstache
              paleo Wes Anderson. Deep v single-origin coffee cred Thundercats
              beard. Mumblecore before they sold out roof party biodiesel.
              Banksy swag Portland readymade synth messenger bag cliche.
            </h2>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <ProductAdditionalInfo />
      </TabPanel>
      <TabPanel>
        <ReviewForm />
      </TabPanel>
    </Tabs>
  </Container>
);
