import React from "react";

import { Component } from "./Component";

export default {
  title: "Test/Component",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});
