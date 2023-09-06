// import { render, screen } from '@testing-library/react';
// import Greet from './greet';

// test('Greet renders correctly', () => {
//   render(<Greet />);
//   const textElement = screen.getByText('Hello');
//   expect(textElement).toBeInTheDocument();
// });

// TDD
// Greet should render the text hello and if a name is passed into the component ,
//  It should render hello followed by the name.

import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name='Akshay' />);
  const textElement = screen.getByText('Hello Akshay');
  expect(textElement).toBeInTheDocument();
});
