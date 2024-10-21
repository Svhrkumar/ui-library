import styled from 'styled-components';
import classNames from 'classnames';
const ButtonTheme = styled.button`
	background-color: #e8ebe9;
	color: #4b4d4b;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #ffffff;
	}

	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}

	&.custom-class {
		background-color: #28a745;
		color: white;
	}
`;

export interface ButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	theme?: 'dark' | 'light';
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
	disabled,
	theme,
}) => {
	return (
		<ButtonTheme
			onClick={onClick}
			className={classNames(className, `${theme}`)}
			disabled={disabled}>
			{children}
		</ButtonTheme>
	);
};

export default Button;
