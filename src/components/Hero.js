import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');
  background-position: center;
  height: 50vh;
`;
const Hero = () => (
  <Container className="flex items-center">
    <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
      <p className="text-black text-2xl my-4">
        Stripy Zig Zag Jigsaw Pillow and Duvet Set
      </p>
      <a
        className="text-xl text-gray-600 inline-block no-underline border-solid border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
        href="/">
        view product
      </a>
    </div>
  </Container>
);

export default Hero;
