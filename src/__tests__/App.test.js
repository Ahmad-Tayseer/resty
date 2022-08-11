import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

test("Load and display app.", async () => {
  render(<App />);
  const lableTest = await waitFor(() => screen.getByTestId("test"));
  const urlTest = await waitFor(() => screen.getByTestId("urlTest"));

  expect(lableTest).toHaveTextContent("RESTy");
  expect(urlTest).toHaveTextContent("URL:");

});

test("Test methods.", async () => {
  render(<App />);

  const results = await waitFor(() => screen.getByTestId("results"));
  const get = screen.getByTestId("get");
  fireEvent.click(get);
  expect(results).toHaveTextContent("Headers");
});