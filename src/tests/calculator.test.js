import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line
import renderer from 'react-test-renderer';
// eslint-disable-next-line
import theCalculator from '../components/calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<theCalculator />);
});

test('match home snapshot', () => {
  const tree = renderer.create(<theCalculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
