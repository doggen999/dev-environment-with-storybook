import React from "react";
import faker from "faker";
import { Component } from "./Component";

export default {
  title: "Test/Component",
  component: Component,
};

const Template = (args) => <Component heading={faker.company.bs()} {...args} />;

export const Primary = Template.bind({});
