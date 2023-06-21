import React from "react";
import { Button } from "@chakra-ui/core";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "chakra/Button",
  component: Button,
};

//  Normal
/*
export const Success = () => <Button variantColor="green">Success</Button>;
export const Danger = () => <Button variantColor="red">Danger</Button>;
*/

//with templates
//should add this line above this line  '' argTypes: {onClick: { action: "clicked" }, ''},
/*
const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};
*/

// with actions :

export const Success = () => (
  <Button onClick={action("Click handler salim")} variantColor="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} variantColor="red">
    Danger
  </Button>
);

export const Log = () => (
  <Button onClick={() => console.log("button clicked")} variantColor="red">
    LOG
  </Button>
);
