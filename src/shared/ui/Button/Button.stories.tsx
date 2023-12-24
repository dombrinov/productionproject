import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  render: () => <Button />,
};

export const Dark: Story = {
  decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
  render: () => <Button />,
};
