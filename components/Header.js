import "../sass/_header.scss"

function Header() {
  return (
    <header className="header">
      <ul>
        <li className="headerLogo">
          <a href="#root">Logan</a>
        </li>

        {/* <li>
          <a href="#about">A propos</a>
        </li> */}

        <li>
          <a href="#projects">Projets</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
