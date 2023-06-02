import s from './NicButton.module.css';

const NicButton = () => {
    const nic = 'Nicaragua'
    return <ul className={s.wrapper}>
        <li className={`${s.item} ${s.nic}`}>{nic}</li>
        <li className={`${s.item} ${s.exitBtn}`}>Exit</li>
    </ul>
}

export default NicButton;