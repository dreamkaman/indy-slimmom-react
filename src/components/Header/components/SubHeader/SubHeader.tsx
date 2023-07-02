import { useSelector } from "react-redux";

import GetSvg from "shared/components/GetSvg/GetSvg";
import NicButton from "../Navigator/components/NicButton/NicButton";

import { isAuthSelector } from "redux/selectors/user";
import s from './SubHeader.module.css';

const SubHeader = () => {
    const showModal = false;
    const isAuth = useSelector(isAuthSelector);

    return <div className={`${s.subHeader} container`}>
        {showModal && <button type="button" className={s.returnBtn}>
            <GetSvg name="returnBtn" className={s.returnIcon} />
        </button>}
        {isAuth && <div className={s.nicButton}>
            <NicButton />
        </div>}
    </div>
}

export default SubHeader;