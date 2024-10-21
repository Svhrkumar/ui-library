import { Meta, StoryObj } from '@storybook/react';
import FormControl, { InputProps } from './Input';

export default {
	title: 'UI Components/Input',
	component: FormControl,
	argTypes: {
		type: {
			control: 'select',
			options: [
				'text',
				'checkbox',
				'radio',
				'password',
				'number',
				'date',
				'email',
				'password',
				'select',
			],
		},
		placeholder: {
			control: 'text',
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: 'inline-radio',
		},
		disabled: {
			control: 'boolean',
		},
	},
} as Meta<InputProps>;

type Story = StoryObj<InputProps>;

export const InputText: Story = {
	args: {
		type: 'text',
		size: 'md',
		placeholder: 'enter name',
	},
};

export const InputCheckbox: Story = {
	args: {
		type: 'checkbox',
	},
};

export const InputRadio: Story = {
	args: {
		type: 'radio',
	},
};

export const InputPassword: Story = {
	args: {
		type: 'password',
		size: 'md',
		placeholder: 'enter password',
	},
};

export const InputNumber: Story = {
	args: {
		type: 'number',
		size: 'md',
		placeholder: 'enter number',
	},
};

export const InputDate: Story = {
	args: {
		type: 'date',
		size: 'md',
	},
};

export const InputEmail: Story = {
	args: {
		type: 'email',
		size: 'md',
		placeholder: 'enter email',
	},
};

export const InputSelect: Story = {
	args: {
		type: 'select',
		size: 'md',
		options: [
			{ label: 'option 1', value: 'option 1' },
			{ label: 'option 2', value: 'option 2' },
		],
	},
};
