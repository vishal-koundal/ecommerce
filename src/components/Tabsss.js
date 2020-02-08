import React from 'react';
import styled from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Container = styled.div`
  ul,
  li {
    border: none;
    box-shadow: none;
  }
`;

export default () => (
  <Container className="text-center">
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Additional Information</Tab>
        <Tab>Reviews</Tab>
      </TabList>
      <TabPanel>
        <h2>
          Authentic keffiyeh master cleanse. Fingerstache semiotics PBR quinoa.
          Pop-up Godard kale chips, trust fund Neutra fingerstache paleo Wes
          Anderson. Deep v single-origin coffee cred Thundercats beard.
          Mumblecore before they sold out roof party biodiesel. Banksy swag
          Portland readymade synth messenger bag cliche.
        </h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  </Container>
);