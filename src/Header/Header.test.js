import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Header tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Header />);
      expect(container).toMatchSnapshot();
    });
  });