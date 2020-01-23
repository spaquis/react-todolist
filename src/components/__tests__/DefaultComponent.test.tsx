import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DefaultComponent from "../DefaultComponent";

describe("Default Component Executions test", () => {
  test("Correct Display", () => {
    // Prepare
    // Act
    const { getByTestId } = render(
      <DefaultComponent />
    );
    // Asserts
  });
