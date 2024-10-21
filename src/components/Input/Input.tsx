import classNames from 'classnames';
import React, { useId, Fragment } from 'react';
import styled, { css } from 'styled-components';

const commonStyle = css`
	padding: 5px 10px !important;
	width: 80% !important;
	border-radius: 9px;
	border: 1px solid gray;
	margin: 5px;
	&:focus {
		border: 1px solid blue !important;
	}
	&.sm {
		width: 20% !important;
	}
	&.md {
		width: 35% !important;
	}
	&.lg {
		width: 90% !important;
	}
`;

const InputTheme = styled.input<{ type: string }>`
	${(props) =>
		props.type === 'checkbox' || props.type === 'radio'
			? css`
					width: auto !important;
					padding: 0 !important;
					margin: 5px 5px;
			  `
			: commonStyle}
`;

const SelectTheme = styled.select`
	${commonStyle}
`;

export interface InputProps {
	type:
		| 'text'
		| 'checkbox'
		| 'radio'
		| 'password'
		| 'number'
		| 'date'
		| 'email'
		| 'textarea'
		| 'select';

	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	placeholder?: string;
	className?: string;
	value?: string;
	checked?: boolean;
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	options?: {
		label: string;
		value: string;
	}[];
}

const FormControl: React.FC<InputProps> = ({
	type,
	onChange,
	placeholder,
	className,
	value,
	checked,
	size,
	disabled,
	options,
}) => {
	const id = useId();

	return (
		<Fragment>
			{type !== 'select' ? (
				<InputTheme
					type={type}
					onChange={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)}
					placeholder={placeholder}
					className={classNames(className, size)}
					value={value}
					checked={checked}
					disabled={disabled}
				/>
			) : (
				<SelectTheme
					onChange={(e) => onChange(e as React.ChangeEvent<HTMLSelectElement>)}
					className={classNames(className, size)}
					value={value}
					disabled={disabled}>
					<option value=''>Select an option</option>
					{options?.map(({ label, value }, index) => (
						<option key={`${id}-${index}`} value={value}>
							{label}
						</option>
					))}
				</SelectTheme>
			)}
		</Fragment>
	);
};

export default FormControl;
