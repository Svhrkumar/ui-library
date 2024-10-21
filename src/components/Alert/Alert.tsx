import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';
import { AlertContext, useAlertContext } from './useAlertcontext';

// Define keyframes for the reveal animation
const revealAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Ensure the container covers the entire viewport and overlays other content
const AlertContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999; /* Ensure it appears above other content */
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none; /* Allow clicks through this container */
`;

const AlertMessageStyle = styled.div`
	padding: 0.1rem;
	border: 1px solid #ccc;
	border-radius: 9px;
	position: absolute;
	width: 25rem;
	z-index: 10000;
	pointer-events: auto;
	animation: ${revealAnimation} 0.5s ease-out;
	height: auto;
	background-color: #fff;
	&.danger {
		background-color: #de0404;
		color: #fff;
	}
	&.warning {
		background-color: #f2af11;
		color: #fff;
	}
	&.info {
		background-color: #116ff2;
		color: #fff;
	}
	&.success {
		background-color: #40e300;
		color: #fff;
	}
	&.top-left {
		top: 10px;
		left: 10px;
	}
	&.top-right {
		top: 10px;
		right: 10px;
	}
	&.bottom-right {
		bottom: 10px;
		right: 10px;
	}
	&.bottom-left {
		bottom: 10px;
		left: 10px;
	}
`;

const AlertBoodyStyle = styled.div`
	padding: 3px 6px;
	color: #fff;
`;
const AlertHeaderStyle = styled.div`
	border-bottom: 1px solid #fff;
	padding: 5px 6px;
	color: #fff;
`;

const AlertFooterStyle = styled.div`
	border-top: 1px solid #fff;
	padding: 5px 6px;
	color: #fff;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	background: none;
	border: none;
	font-size: 16px;
	cursor: pointer;
	color: inherit;
`;

export interface AlertProps {
	children: React.ReactNode;
	className?: string;
	open?: boolean;
	onClose?: () => void;
	variant?: 'success' | 'danger' | 'info' | 'warning';
	position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
	duration?: number;
	dismissible?: boolean;
}

const AlertComponent: FC<AlertProps> = ({
	children,
	open,
	onClose,
	variant,
	position,
	duration,
	dismissible,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (open) {
			setIsOpen(true);
			if (!dismissible) {
				timer = setTimeout(() => {
					setIsOpen(false);
					if (onClose) onClose();
				}, duration || 2000);
			}
		} else {
			setIsOpen(false);
		}
		return () => clearTimeout(timer);
	}, [open, duration, onClose, dismissible]);

	if (!isOpen) return null;

	const values = {
		isOpen,
		onClose,
		variant,
		position,
	};

	return ReactDOM.createPortal(
		<AlertContext.Provider value={values}>
			<AlertContainer className='alert-container'>{children}</AlertContainer>
		</AlertContext.Provider>,
		document.getElementById('alert-root')!
	);
};

const AlertMessage: FC<{ children: React.ReactNode }> = ({ children }) => {
	const { isOpen, onClose, variant, position } = useAlertContext();
	return (
		<AlertMessageStyle className={classNames(variant, position)}>
			{isOpen && <CloseButton onClick={onClose}>&times;</CloseButton>}
			{children}
		</AlertMessageStyle>
	);
};
const AlertBody: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <AlertBoodyStyle>{children}</AlertBoodyStyle>;
};

const AlertHeader: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <AlertHeaderStyle>{children}</AlertHeaderStyle>;
};

const AlertFooter: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <AlertFooterStyle>{children}</AlertFooterStyle>;
};

const Alert = Object.assign(AlertComponent, {
	Header: AlertHeader,
	Container: AlertMessage,
	Body: AlertBody,
	Footer: AlertFooter,
});

export default Alert;
