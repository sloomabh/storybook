/** @type { import('@storybook/react').Preview } */
import React from "react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";
import { withConsole } from "@storybook/addon-console";
const preview = {
  decorators: [
    (story) => (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box m="12"> {story()} </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};

export default preview;

// I adde option from  'Sorting stories' in documentation .
// I added decorator for global decoration centering all elements  from here
//  decorators: [(story) => <Center>{story()}</Center>],

//we can use global decoration with any library like chakr UI
