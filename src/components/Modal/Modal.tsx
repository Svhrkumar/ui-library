import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { ModalContext, useModalContext } from './useModalContext'; // Ensure this context is correctly set up
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalDisplay = styled.div`
	background-color: white;
	border-radius: 9px;
	padding: 0.5rem;
	max-width: 500px;
	width: 100%;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	animation: slide-down 0.3s ease-out;
	&.sm {
		max-width: 400px;
	}
	&.md {
		max-width: 600px;
	}
	&.lg {
		max-width: 1000px;
	}
	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}
`;

const ModalContentTheme = styled.div`
	padding: 0.5rem;
	width: 100%;
	max-height: 500px;
	overflow-y: scroll;
`;

const ModalHeaderTheme = styled.div`
	padding: 0.5rem;
	border-bottom: 1px solid #d1d1d1;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ModalFooterTheme = styled.div`
	padding: 0.5rem;
	border-top: 1px solid #d1d1d1;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export interface ModalProps {
	className?: string;
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	size?: 'sm' | 'md' | 'lg';
	theme?: 'dark' | 'light';
}

const ModalComponent: FC<ModalProps> = ({
	children,
	className,
	isOpen,
	onClose,
	size,
	theme,
}) => {
	const contextValue = { onClose };

	if (!isOpen) return null;

	return (
		<ModalContext.Provider value={contextValue}>
			<ModalContainer className={classNames(className)}>
				<ModalDisplay className={classNames(className, size, theme)}>
					{children}
				</ModalDisplay>
			</ModalContainer>
		</ModalContext.Provider>
	);
};

const ModalContent: FC<ModalProps> = ({ className, children }) => {
	return (
		<ModalContentTheme className={classNames(className)}>
			{children}
		</ModalContentTheme>
	);
};

const ModalHeader: FC<ModalProps> = ({ className, children }) => {
	const { onClose } = useModalContext();
	return (
		<ModalHeaderTheme className={classNames(className)}>
			{children}
			<MdClose
				style={{ cursor: 'pointer' }}
				onClick={() => {
					// Access onClose from context

					if (onClose) onClose();
				}}
			/>
		</ModalHeaderTheme>
	);
};

const ModalFooter: FC<ModalProps> = ({ className, children }) => {
	return (
		<ModalFooterTheme className={classNames(className)}>
			{children}
		</ModalFooterTheme>
	);
};

const Modal = Object.assign(ModalComponent, {
	Content: ModalContent,
	Header: ModalHeader,
	Footer: ModalFooter,
});

export default Modal;
