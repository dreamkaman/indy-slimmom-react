import { FC, ReactNode } from 'react';

interface IButton {
    name?: string;
    className: string;
    type: 'button' | 'reset' | 'submit';
    onClick?: () => void;
    children?: ReactNode;
}
const Button: FC<IButton> = ({ name, className, type = 'button', children, onClick }) => {
    return <button className={`${className}`} type={type} onClick={onClick}>{name}{children}</button>
}

export default Button;