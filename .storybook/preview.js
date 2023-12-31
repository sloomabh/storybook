/** @type { import('@storybook/react').Preview } */
import React from "react";
import Center from "../src/components/Center/Center";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
//import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";

import {
  INITIAL_VIEWPORTS,
  INITIAL_VIEWPORTS_DEFAULT,
} from "@storybook/addon-viewport";

const preview = {
  decorators: [
    withKnobs,

    (story) => (
      <ChakraProvider>
        <CSSReset />
        <Box m="12"> {story()} </Box>
      </ChakraProvider>
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
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS_DEFAULT,
      },
    },
  },
};

export default preview;

// I adde option from  'Sorting stories' in documentation .
// I added decorator for global decoration centering all elements  from here
//  decorators: [(story) => <Center>{story()}</Center>],

//we can use global decoration with any library like chakr UI
