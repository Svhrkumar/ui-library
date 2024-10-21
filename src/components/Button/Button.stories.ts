import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
	title: 'UI Components/Button',
	component: Button,
	argTypes: {
		theme: {
			control: 'select',
			options: ['light', 'dark'],
		},
		children: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
	},
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Light: Story = {
	args: {
		theme: 'light',
		children: 'Click',
	},
};

export const Dark: Story = {
	args: {
		theme: 'dark',
		children: 'Click',
	},
};

export const Disabled: Story = {
	args: {
		theme: 'light',
		children: 'Click',
		disabled: true,
	},
};

export const onClick: Story = {
	args: {
		theme: 'light',
		children: 'Click',
		disabled: false,
		onClick: () => alert('Clicked'),
	},
};
