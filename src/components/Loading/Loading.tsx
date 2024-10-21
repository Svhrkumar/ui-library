import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadContainer = styled.div`
	display: grid;
	place-items: center;
	padding: 1rem 2rem;
	z-index: 99;
`;

const Spinner = styled.div<{ color: string }>`
	width: 50px;
	padding: 8px;
	aspect-ratio: 1;
	border-radius: 50%;
	background: ${(props) => (props.color ? props.color : '#025ef2')};
	--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
	-webkit-mask: var(--_m);
	mask: var(--_m);
	-webkit-mask-composite: source-out;
	mask-composite: subtract;
	animation: ${spin} 1s infinite linear;
`;

export interface LoadProps {
	isLoading: boolean;
	color?: string;
}

const Loading: FC<LoadProps> = ({ isLoading, color = '#025ef2' }) => {
	return (
		<LoadContainer>{isLoading && <Spinner color={color} />}</LoadContainer>
	);
};

export default Loading;
