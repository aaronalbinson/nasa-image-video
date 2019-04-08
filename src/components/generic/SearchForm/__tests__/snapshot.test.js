import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import SearchForm from "../";

it("Matches snapshot", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<SearchForm />);
  expect(result).toMatchSnapshot();
});
