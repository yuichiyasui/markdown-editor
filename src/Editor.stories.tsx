import { Meta, StoryObj } from "@storybook/react";

import { Editor } from "./Editor";

type ComponentType = typeof Editor;

export default { component: Editor } satisfies Meta<ComponentType>;

export const Default: StoryObj<ComponentType> = {};
