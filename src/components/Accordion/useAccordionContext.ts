import { createContext, useContext } from 'react';

type AccContextProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	theme: string;
};

export const AccordionContext = createContext<AccContextProps | undefined>(
	undefined
);
export const useAccordionContext = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error('AccordionHeader must be used within an AccordionItem');
	}

	return context;
};
