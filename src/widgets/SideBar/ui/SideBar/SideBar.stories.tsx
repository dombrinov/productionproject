import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { SideBar } from "./SideBar";

export default {
  title: "widget/SideBar",
  component: SideBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SideBar>;

export const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
