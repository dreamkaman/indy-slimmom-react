import { FC } from 'react';

import { IOutputText } from 'types';

import s from './OutputText.module.css';



const OutputText: FC<IOutputText> = ({ text, className }) => {
    return <p className={`${s.outputText} ${className}`}>{text}</p>
}


export default OutputText;