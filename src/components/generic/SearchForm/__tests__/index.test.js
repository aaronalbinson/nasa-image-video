import React from "react";
import { shallow } from "enzyme";
import SearchForm from "../";

it("renders without crashing", () => {
  shallow(<SearchForm />);
});
