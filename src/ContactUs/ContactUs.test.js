import React from "react";
import { render } from "@testing-library/react";
import ContactUs from "./ContactUs.jsx";

describe("ContactUs tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ContactUs />);
      expect(container).toMatchSnapshot();
    });
  });