import { FC } from 'react';

import s from './OutputText.module.css';

interface IOutputText {
    text: string | number;
    className?: string;
}
const OutputText: FC<IOutputText> = ({ text, className }) => {
    return <p className={`${s.outputText} ${className}`}>{text}</p>
}


export default OutputText;