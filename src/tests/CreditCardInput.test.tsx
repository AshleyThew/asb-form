import React from 'react';
import { act, render, screen, configure, fireEvent } from '@testing-library/react';
import CreditCardInput from '../components/CreditCardInput';
import userEvent from '@testing-library/user-event'

// TODO swap away from act as eslint gives errors

configure({testIdAttribute: 'id'})

test('card number validation', async () => {
  render(<CreditCardInput validateOnMount={false}/>);
  await act(async ()=>{
    userEvent.type(screen.getByLabelText(/Credit Card Number/i), '0');
  });
  const short = screen.getByText(/Too short/i);
  expect(short).toBeInTheDocument();

  await act(async ()=>{
    userEvent.type(screen.getByLabelText(/Credit Card Number/i), '12345678912');
  });
  const valid = screen.queryByText(/Too short/i);
  expect(valid).not.toBeInTheDocument();
});

test('cvc number validation', async () => {
  render(<CreditCardInput validateOnMount={false}/>);
  await act(async ()=>{
    userEvent.type(screen.getByLabelText(/CVC/i), '0');
  });
  const short = screen.getByText(/Too short/i);
  expect(short).toBeInTheDocument();

  await act(async ()=>{
    userEvent.type(screen.getByLabelText(/CVC/i), '12');
  });
  const valid = screen.queryByText(/Too short/i);
  expect(valid).not.toBeInTheDocument();
});

test('expiry month validation', async () => {
  render(<CreditCardInput validateOnMount={false}/>);
  await act(async ()=>{
    userEvent.type(screen.getByTestId(/expiryMM/i), '1');
  });
  const short = screen.queryByText(/Too short/i);
  expect(short).toBeInTheDocument();

  await act(async ()=>{
    userEvent.type(screen.getByTestId(/expiryMM/i), '0');
  });
  const valid = screen.queryByText(/Too short/i);
  expect(valid).not.toBeInTheDocument();
});

test('expiry year validation', async () => {
  render(<CreditCardInput validateOnMount={false}/>);
  await act(async ()=>{
    userEvent.type(screen.getByTestId(/expiryYY/i), '1');
  });
  const short = screen.queryByText(/Too short/i);
  expect(short).toBeInTheDocument();

  await act(async ()=>{
    userEvent.type(screen.getByTestId(/expiryYY/i), '0');
  });
  const valid = screen.queryByText(/Too short/i);
  expect(valid).not.toBeInTheDocument();
});

test('button submit', async() => {
  render(<CreditCardInput validateOnMount={false}/>);
  const button = screen.getByText(/Submit/i);
  expect(button).not.toHaveAttribute('disabled');

  await act(async ()=>{
    fireEvent.click(button);
  });

});
