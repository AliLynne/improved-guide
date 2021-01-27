import ThemeToggle from "./ThemeToggle";

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="title">AliLynne</h1>
      <ThemeToggle themeSwitch={toggleTheme} />
    </header>
  );
};

export default Header;
