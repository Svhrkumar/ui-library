import type { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccProps } from '../Accordion';
import { Example } from './Example';

// Define a type that extends the component's props with any additional arguments
// type AccordionPropsAndCustomArgs = AccProps & {
// 	footer?: string;
// };

const meta: Meta<AccProps> = {
	title: 'UI Components/Accordion',
	component: Accordion,
	argTypes: {
		theme: {
			control: 'select',
			options: ['light', 'dark'],
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: 'inline-radio',
		},
		isIcon: {
			control: 'boolean',
		},
	},
	render: Example,
};
export default meta;

type Story = StoryObj<AccProps>;

export const AccordionLight: Story = {
	args: {
		theme: 'light',
		size: 'lg',
		isIcon: true,
	},
};

export const AccordionDark: Story = {
	args: {
		theme: 'dark',
		size: 'lg',
		isIcon: true,
	},
};
