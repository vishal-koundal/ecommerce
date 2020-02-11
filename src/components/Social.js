import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Icon = styled.i``;

const Socialicons = [
  {
    id: 1,
    name: 'fas fa-heart',
    to: '/',
  },
  {
    id: 2,
    name: 'fab fa-facebook-f',
    to: '/',
  },
  { id: 3, name: 'fab fa-twitter', to: '/' },
  { id: 4, name: 'fab fa-pinterest', to: '/' },
];

const Social = () => (
  <div className="flex -mr-4">
    {Socialicons.map(item => (
      <Link to={item.to} key={item.id} className="flex text-gray-700">
        <p className="text-gray-700 mr-4 hover:text-black">
          {' '}
          <Icon className={item.name} />
        </p>
      </Link>
    ))}
  </div>
);

export default Social;
