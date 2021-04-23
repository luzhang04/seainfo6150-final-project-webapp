import React from "react";
import { render } from "@testing-library/react";
import DiyImage from "./DiyImage.jsx";

describe("DiyImage tests", () => {
  it("renders correctly", () => {
    const { container } = render(<DiyImage name="the title" url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/splatter-painted-easter-egg-designs-1616169765.jpg?crop=0.9514285714285714xw:1xh;center,top&resize=980:*"/>);
    expect(container).toMatchSnapshot();
  });
});