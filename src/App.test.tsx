import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('label renders to page on load', async () => {
  render(<App />);
  const inputLabel = await screen.findByText('Github Username');
  expect(inputLabel).toBeInTheDocument();
});

test('user-input is not a github username and does not render to page', async () => {
  render(<App />);
  const searchButton = screen.getByRole('button');
  const searchInput = screen.getByRole('textbox');

  fireEvent.change(searchInput, {target: {value: 'exampleFail'}});
  fireEvent.click(searchButton);
  const testFail = screen.queryByText("exampleFail");

  expect(testFail).not.toBeInTheDocument();
})

// this test passes but should potentially mock firebase api hit- "unexpected state" returns
test("user-input is a github username and renders to page", async () => {
  render(<App />);
  const searchButton = screen.getByRole("button");
  const searchInput = screen.getByRole("textbox");

  fireEvent.change(searchInput, { target: { value: "pass" } });
  fireEvent.click(searchButton);

  const testPass = await screen.findByText(/pass/i);

  expect(testPass).toBeInTheDocument();
});