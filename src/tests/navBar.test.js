import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line
import NavBar from '../components/Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<NavBar />);
});
