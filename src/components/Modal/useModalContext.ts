import { createContext, useContext } from 'react';

type modalContextProps = {
	onClose?: () => void;
};

export const ModalContext = createContext<modalContextProps | undefined>(
	undefined
);

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('ModalBody must be used within an ModalButtom');
	}

	return context;
};
