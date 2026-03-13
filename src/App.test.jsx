import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders hello react heading", () => {
  render(<App />);
  expect(screen.getByText("Hello React")).toBeInTheDocument();
});

test("shows initial count of 0", () => {
  render(<App />);
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
});

test("increments count when button clicked", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
});

test("decrements count when button clicked", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
});
