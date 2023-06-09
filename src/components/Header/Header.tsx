import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import SubHeader from "./components/SubHeader/SubHeader";

import s from './Header.module.css';

const Header = () => {
  const isAuth = false;

  return <>
    <header className={s.header}>
      <div className={s.menu}>
        <Logo />
        <Navigator />
      </div>
      {isAuth && <SubHeader />}
    </header>
  </>
}

export default Header;
