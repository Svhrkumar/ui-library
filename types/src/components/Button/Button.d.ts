export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    theme?: 'dark' | 'light';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
