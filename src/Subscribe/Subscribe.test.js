import React from "react";
import { render } from "@testing-library/react";
import Subscribe from "./Subscribe.jsx";

describe("Subscribe tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Subscribe />);
      expect(container).toMatchSnapshot();
    });
  });