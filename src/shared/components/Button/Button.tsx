import { FC, ReactNode } from 'react';

interface IButton {
    name?: string;
    className: string;
    type: 'button' | 'reset' | 'submit';
    children?: ReactNode;
}
const Button: FC<IButton> = ({ name, className, type = 'button', children }) => {
    return <button className={`${className}`} type={type}>{name}{children}</button>
}

export default Button;