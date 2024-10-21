import Accordion, { AccProps } from '../Accordion';

export const Example = (args: AccProps) => {
	return (
		<Accordion>
			<Accordion.Item {...args}>
				<Accordion.Header {...args}>
					<span>Accordion one</span>
				</Accordion.Header>
				<Accordion.Body {...args}>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</span>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
