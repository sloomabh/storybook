import React from "react";
import Input from "./Input";

export default {
  title: "test/Salim/Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

//change the name in story book  only :
//Small.storyName = "Small Input";
