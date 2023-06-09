import GetSvg from "shared/components/GetSvg/GetSvg";
import NicButton from "../Navigator/components/NicButton/NicButton";

import s from './SubHeader.module.css';

const SubHeader = () => {
    const showModal = true;

    return <div className={`${s.subHeader} container`}>
        {showModal && <button type="button" className={s.returnBtn}>
            <GetSvg name="returnBtn" className={s.returnIcon} />
        </button>}
        <div className={s.nicButton}>
            <NicButton />
        </div>
    </div>
}

export default SubHeader;