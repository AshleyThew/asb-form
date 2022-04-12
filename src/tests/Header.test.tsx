import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('correct header', () => {
  render(<Header menu={false} setMenu={() => {}} title={"Header"}/>);
  const header = screen.getByText(/Header/i);
  expect(header).toBeInTheDocument();
});

test('other header', () => {
  render(<Header menu={false} setMenu={() => {}} title={"Other"}/>);
  const header = screen.queryByText(/Header/i);
  expect(header).not.toBeInTheDocument();
});
