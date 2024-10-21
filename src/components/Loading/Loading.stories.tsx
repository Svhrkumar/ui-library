import { Meta, StoryObj } from '@storybook/react';
import Loading, { LoadProps } from './Loading';

const meta: Meta<LoadProps> = {
	title: 'UI Components/Loading',
	component: Loading,
	argTypes: {
		isLoading: {
			control: 'boolean',
		},
		color: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<LoadProps>;

export const Default: Story = {
	args: {
		isLoading: true,
		color: '#e3a002',
	},
};
