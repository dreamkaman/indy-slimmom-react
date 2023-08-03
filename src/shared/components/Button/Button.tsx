import { FC, ReactNode, SyntheticEvent } from 'react';

interface IButton {
    id?: string | null,
    name?: string,
    className: string,
    type?: 'button' | 'reset' | 'submit',
    onClick?: (e?: SyntheticEvent) => void,
    children?: ReactNode,
}
const Button: FC<IButton> = ({ id = null, name, className, type = 'button', children, onClick }) => {
    return <button id={id} className={`${className}`} type={type} onClick={onClick}>{name}{children}</button>
}

export default Button;