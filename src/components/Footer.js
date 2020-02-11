import React from 'react';
import Social from './Social';

const Footer = () => (
  <footer className="container bg-white text-gray-600 work-sans leading-normal text-base tracking-normal mx-auto bg-white py-8 border-solid border-t border-gray-400">
    <div className="container flex px-3 py-8 ">
      <div className="w-full mx-auto flex flex-wrap">
        <div className="flex w-full lg:w-1/2 ">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900">About</h3>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vel mi ut felis tempus commodo nec id erat. Suspendisse
              consectetur dapibus velit ut lacinia.
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900">Social</h3>
            <div className="items-center pt-3">
              <Social />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
