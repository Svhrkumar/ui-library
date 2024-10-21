import React, { useState, FC, Fragment } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AccordionContext, useAccordionContext } from './useAccordionContext';
import classNames from 'classnames';

const AccordionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const AccordionItemContainer = styled.div`
	margin-bottom: 1.5rem;
	border-radius: 5px;
	&.sm {
		width: 50%;
	}
	&.md {
		width: 60%;
	}
	&.lg {
		width: 90%;
	}
`;

const AccordionHeaderContainer = styled.div<{ isOpen: boolean }>`
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-bottom: 0.5rem;
	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}
`;

const AccordionBodyContainer = styled.div<{ isOpen: boolean }>`
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}
`;

export interface AccProps {
	children: React.ReactNode;
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	isIcon?: boolean;
	theme?: 'dark' | 'light';
}

const AccordionComponent: FC<AccProps> = ({ children }) => {
	return <AccordionContainer>{children}</AccordionContainer>;
};

const AccordionItem: FC<AccProps> = ({ children, size, theme = '' }) => {
	const [isOpen, setIsOpen] = useState(false);

	const values = {
		isOpen,
		setIsOpen,
		theme,
	};

	return (
		<AccordionContext.Provider value={values}>
			<AccordionItemContainer className={classNames(size)}>
				{children}
			</AccordionItemContainer>
		</AccordionContext.Provider>
	);
};

const AccordionHeader: FC<AccProps> = ({ children, className, isIcon }) => {
	const { isOpen, setIsOpen, theme } = useAccordionContext();

	return (
		<AccordionHeaderContainer
			className={classNames(className, theme)}
			isOpen={isOpen}
			onClick={() => setIsOpen((prev) => !prev)}>
			{children}
			{isIcon && (
				<Fragment>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</Fragment>
			)}
		</AccordionHeaderContainer>
	);
};

const AccordionBody: FC<AccProps> = ({ children, className }) => {
	const { isOpen, theme } = useAccordionContext();

	return (
		<AccordionBodyContainer
			className={classNames(className, theme)}
			isOpen={isOpen}>
			{children}
		</AccordionBodyContainer>
	);
};

const Accordion = Object.assign(AccordionComponent, {
	Item: AccordionItem,
	Header: AccordionHeader,
	Body: AccordionBody,
});

export default Accordion;
