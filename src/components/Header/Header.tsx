import BurgerMenu from "components/BurgerMenu/BurgerMenu";
import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import SubHeader from "./components/SubHeader/SubHeader";

import s from './Header.module.css';
import { useState } from "react";

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleBurgerMenuClick = () => {
    setShowBurgerMenu(false);
  }
  return <>
    <header className={s.header}>
      <div className={s.menu}>
        <Logo />
        <Navigator />
      </div>
      <SubHeader />
    </header>
    {showBurgerMenu && <BurgerMenu onClick={handleBurgerMenuClick} />}
  </>
}

export default Header;
