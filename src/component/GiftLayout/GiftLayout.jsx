// ParentComponent.jsx
// GiftLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Gift from './Gift';

const GiftLayout = () => {
  return (
    <>
      <Gift />
      <nav>
        <ul>
          <li>
            <Link to="Giftpage">Child 1</Link>
          </li>
          <li>
            <Link to="Feature">Child 1</Link>
          </li>
          <li>
            <Link to="Anytime">Child 2</Link>
          </li>
          <li>
            <Link to="Congratulation">Child 3</Link>
          </li>
          <li>
            <Link to="Thanku">Child 4</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default GiftLayout;
