import Button from '../../Button';
import Modal, { ModalProps } from '../Modal';

const Example = (args: ModalProps) => {
	return (
		<Modal {...args}>
			<Modal.Header {...args}>
				<p>Modal Header</p>
			</Modal.Header>
			<Modal.Content {...args}>
				<p>
					{' '}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				</p>
			</Modal.Content>
			<Modal.Footer>
				<Button onClick={() => null}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Example;
