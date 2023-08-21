import { FC } from 'react';

import { IButton } from 'types';

const Button: FC<IButton> = ({ id = null, name, className, type = 'button', children, onClick }) => {
    return <button id={id} className={`${className}`} type={type} onClick={onClick}>{name}{children}</button>
}

export default Button;