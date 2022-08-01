import { render, screen } from '@testing-library/react';
import App from './Front/App';
import Home from "./Front/Home";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
