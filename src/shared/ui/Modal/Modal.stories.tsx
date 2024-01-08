import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae doloribus reiciendis architecto voluptatem, illum autem quod, minima esse, dolorem quasi recusandae assumenda? Odio ex mollitia velit fugit modi pariatur",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae doloribus reiciendis architecto voluptatem, illum autem quod, minima esse, dolorem quasi recusandae assumenda? Odio ex mollitia velit fugit modi pariatur",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
