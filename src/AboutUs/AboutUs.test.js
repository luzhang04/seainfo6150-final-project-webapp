import React from "react";
import { render } from "@testing-library/react";
import AboutUs from "./AboutUs.jsx";

describe("AboutUs tests", () => {
  it("renders correctly", () => {
    const { container } = render(<AboutUs />);
    expect(container).toMatchSnapshot();
  });
});

