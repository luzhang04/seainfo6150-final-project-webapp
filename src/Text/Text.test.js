import React from "react";
import { render } from "@testing-library/react";
import Text from "./Text.jsx";

describe("Text tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Text text="the text"/>);
      expect(container).toMatchSnapshot();
    });
  });