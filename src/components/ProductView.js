import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Social from './Social';

const Container = styled.div`
  background: #eeeeee;
  .counter {
    border: 1px solid #dadada;
  }
`;

const ProductView = () => {
  const [count, setCount] = useState(1);
  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  useEffect(() => {
    setCount(1);
  }, [1]);

  return (
    <Container className="px-6 md:px-32 py-4 md:py-16 mb-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3">
          <img
            className="max-h-screen"
            src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-pendant-lamp.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-black text-2xl my-1">Pendant Lamp </p>
          <p className="text-xl pb-5 text-orange-500">$79.00</p>
          <p className="text-gray-700 pb-5 leading-relaxed">
            Designed for simplicity and made from high quality materials. Its
            sleek geometry and material combinations creates a modern
            personalized look.
          </p>
          <div className="flex py-1 counter justify-center items-center text-black">
            <button
              className="text-2xl px-4 focus:outline-none"
              type="button"
              onClick={subtract}
            >
              <i className="fas fa-caret-left" />
            </button>
            <p>{count}</p>
            <button
              className="text-2xl px-4 focus:outline-none"
              type="button"
              onClick={add}
            >
              <i className="fas fa-caret-right" />
            </button>
          </div>
          <button
            className="text-base w-full text-center py-3 bg-black text-white mb-6"
            type="button"
          >
            Add to cart
          </button>
          <div>
            <Social />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
