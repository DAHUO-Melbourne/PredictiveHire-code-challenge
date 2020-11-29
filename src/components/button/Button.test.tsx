import React, { Component } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../../utils";
import Button from "./index";
import { IButton } from "../../interfaces/interfaces";

const setUp = (props: IButton) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe("link button correctly rendered", () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  const props = {
    href: "/",
    isLoading: false,
    content: "click",
  };
  beforeEach(() => {
    component = setUp(props);
  });
  it("Should render correctly", () => {
    const wrapper = findByTestAttr(component, "link-button");
    expect(wrapper.length).toBe(1);
  });
});

describe("no-link button correctly rendered", () => {
  let component: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  const props = {
    isLoading: false,
    content: "click",
  };
  beforeEach(() => {
    component = setUp(props);
  });
  it("Should render correctly", () => {
    const wrapper = findByTestAttr(component, "no-link-button");
    expect(wrapper.length).toBe(1);
  });
  it("Button load should render correctly", () => {
    const wrapper = findByTestAttr(component, "no-link-button");
    expect(wrapper.props().loading).toBe(false);
  });
  it("Button type should render correctly", () => {
    const wrapper = findByTestAttr(component, "no-link-button");
    expect(wrapper.props().htmlType).toBe("button");
  });
});
