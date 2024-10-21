import { Meta, StoryObj } from '@storybook/react';
import AlertWrapper from './Example'; // Import the wrapper component
import { AlertProps } from '../Alert';

const meta: Meta<AlertProps> = {
	title: 'UI Components/Alert',
	component: AlertWrapper,
	argTypes: {
		variant: {
			control: 'select',
			options: ['success', 'danger', 'info', 'warning'],
		},
		position: {
			options: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
			control: 'inline-radio',
		},
		duration: {
			control: 'number',
		},
		dismissible: {
			control: 'boolean',
		},
	},
};
export default meta;

type Story = StoryObj<AlertProps>;

export const AlertSuccess: Story = {
	args: {
		variant: 'success',
		position: 'top-right',
		duration: 3000,
		dismissible: true,
	},
};

export const AlertInfo: Story = {
	args: {
		variant: 'info',
		position: 'bottom-right',
		duration: 3000,
		dismissible: true,
	},
};

export const AlertWarning: Story = {
	args: {
		variant: 'warning',
		position: 'bottom-left',
		duration: 3000,
		dismissible: true,
	},
};

export const AlertDanger: Story = {
	args: {
		variant: 'danger',
		position: 'bottom-right',
		duration: 3000,
		dismissible: true,
	},
};
