import Logo from "./components/Logo";
import Navigator from "./components/Navigator";

// eslint-disable-next-line no-unused-vars
import s from './Header.module.css';

const Header = () => {
  return <header>
    <Logo />
    <Navigator />
  </header>;
};

export default Header;
