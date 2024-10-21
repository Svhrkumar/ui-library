import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from '../Modal';
import Example from './Example';

const meta: Meta<ModalProps> = {
	title: 'UI Components/Modal',
	component: Modal,
	render: Example,
	argTypes: {
		theme: {
			control: 'select',
			options: ['light', 'dark'],
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: 'inline-radio',
		},
		isOpen: { option: 'boolean' },
	},
};

export default meta;

type Story = StoryObj<ModalProps>;

export const ModalLight: Story = {
	args: {
		theme: 'light',
		size: 'lg',
	},
};

export const ModalDark: Story = {
	args: {
		theme: 'dark',
		size: 'lg',
	},
};
