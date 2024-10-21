import React, { useState } from 'react';
import Alert, { AlertProps } from '../Alert';

// Ensure the alert-root exists in Storybook
const AlertWrapper: React.FC<AlertProps> = (props) => {
	const [isAlertOpen, setIsAlertOpen] = useState(true);

	const handleClose = () => {
		setIsAlertOpen(false);
	};

	return (
		<>
			<div id='alert-root'></div>
			<Alert {...props} open={isAlertOpen} onClose={handleClose}>
				<Alert.Header>{props.variant} Alert</Alert.Header>
				<Alert.Body>This is a {props.variant} alert message.</Alert.Body>
				<Alert.Footer>
					<button onClick={handleClose}>Dismiss</button>
				</Alert.Footer>
			</Alert>
		</>
	);
};

export default AlertWrapper;
