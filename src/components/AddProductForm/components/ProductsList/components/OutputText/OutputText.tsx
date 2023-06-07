import s from './OutputText.module.css';

const OutputText = (text: string | number) => {
    return <p className={s.outputText}>{text}</p>
}


export default OutputText;