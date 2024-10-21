import { createContext, useContext } from 'react';
type AlertContextProps = {
	isOpen: boolean;
	onClose?: () => void;
	variant?: string;
	position?: string;
};

export const AlertContext = createContext<AlertContextProps | undefined>(
	undefined
);

export const useAlertContext = () => {
	const context = useContext(AlertContext);
	if (!context) {
		throw new Error('AccordionHeader must be used within an AccordionItem');
	}

	return context;
};
