import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "test/Salim/Button",
  component: Button,
  // decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);
export const Secondary = () => (
  <Center>
    <Button variant="secondary">Secondary</Button>
  </Center>
);
export const Success = () => (
  <Center>
    <Button variant="success">Success</Button>
  </Center>
);
export const Danger = () => (
  <Center>
    <Button variant="danger">Danger</Button>
  </Center>
);

// if we want  tomake tamplates:
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
