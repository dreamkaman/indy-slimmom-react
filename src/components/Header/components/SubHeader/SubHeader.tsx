import GetSvg from "shared/components/GetSvg/GetSvg";
import NicButton from "../Navigator/components/NicButton/NicButton";

import s from './SubHeader.module.css';

const SubHeader = () => {
    return <div className={s.subHeader}>
        <button type="button">
            <GetSvg name="returnBtn" className={s.returnBtn} />
        </button>
        <NicButton />
    </div>
}

export default SubHeader;