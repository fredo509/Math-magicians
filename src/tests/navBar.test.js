import React from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from '../components/navBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<NavBar />);
});
