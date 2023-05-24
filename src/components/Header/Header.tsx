import Logo from "./components/Logo";
import Navigator from "./components/Navigator";

import s from './Header.module.css';

const Header = () => {
  return <header className={s}>
    <Logo />
    <Navigator />
  </header>;
}

export default Header;
