import GetSvg from "shared/components/GetSvg/GetSvg";
import NicButton from "../Navigator/components/NicButton/NicButton";

import s from './SubHeader.module.css';

const SubHeader = () => {
    const showModal = false;

    return <div className={s.subHeader}>
        {showModal && <button type="button" className={s.returnBtn}>
            <GetSvg name="returnBtn" className={s.returnIcon} />
        </button>}
        <NicButton />
    </div>
}

export default SubHeader;