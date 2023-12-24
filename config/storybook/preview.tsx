import React from "react";
import { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import "app/styles/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StyleDecorator>
        <Story />
      </StyleDecorator>
    ),
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) => (
      <RouterDecorator>
        <Story />
      </RouterDecorator>
    ),
  ],
};

export default preview;
