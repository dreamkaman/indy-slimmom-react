import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import SubHeader from "./components/SubHeader/SubHeader";

import s from './Header.module.css';

const Header = () => {
  return <header className={s.header}>
    <Logo />
    <Navigator />
    <SubHeader />
  </header>;
}

export default Header;
