import s from './NicButton.module.css';

const NicButton = () => {
    const nic = 'Nic'
    return <ul className={s.wrapper}>
        <li className={s.item}>{nic}</li>
        <li className={s.item}>Exit</li>
    </ul>
}

export default NicButton;