import BurgerMenu from "components/BurgerMenu/BurgerMenu";
import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import SubHeader from "./components/SubHeader/SubHeader";

import s from './Header.module.css';

const Header = () => {

  return <>
    <header className={s.header}>
      <div className={s.menu}>
        <Logo />
        <Navigator />
      </div>
      <SubHeader />
    </header>
    {<BurgerMenu />}
  </>
}

export default Header;
