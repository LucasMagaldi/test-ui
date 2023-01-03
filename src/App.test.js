import { render, screen } from '@testing-library/react';
import App from './App';

test('testing', () => {
  render(<App />);
  const buttonlement = screen.getByRole("button", {name: "testing", exact: false});
  expect(buttonlement).toBeInTheDocument();
});
