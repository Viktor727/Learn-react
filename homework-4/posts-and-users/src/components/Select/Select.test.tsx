import * as React from "react";
import { shallow } from "enzyme";
import Select from "./Select.jsx";

describe("Select", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
});
