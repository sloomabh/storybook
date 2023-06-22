import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "chakra/Button",
  component: Button,
  tags: ["autodocs"],
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
  <Button onClick={action("Click handler salim")} colorScheme="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Danger
  </Button>
);

export const Log = () => (
  <Button
    onClick={() => console.log("button clicked", process.env.STORYBOOK_THEME)}
    colorScheme="red"
  >
    LOG
  </Button>
);

//using knobs:

export const Knobs = () => (
  <Button colorScheme="purple" disabled={boolean("Disabled", false)}>
    {text("Label of salim button", "Button Label")}
  </Button>
);
