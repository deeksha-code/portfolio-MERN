/* eslint-disable react/prop-types */

function Navbar({ showMenu, setShowMenu }) {
  return (
    <div className="header__content">
      <div className="header__logo-container">
        <div className="header__logo-img-cont">
          <img
            src="deeksha.png"
            alt="Deeksha Shetty"
            className="header__logo-img"
          />
        </div>
        <span className="header__logo-sub">Deeksha Shetty</span>
      </div>
      <nav className="header__main">
        <ul className="header__links">
          <li className="header__links-wrapper">
            <a className="header__link" href="#home">
              Home
            </a>
          </li>
          <li className="header__links-wrapper">
            <a className="header__link" href="#about">
              About
            </a>
          </li>
          <li className="header__links-wrapper">
            <a className="header__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="header__links-wrapper">
            <a className="header__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="header__main-ham-menu-cont">
          <svg
            onClick={() => {
              setShowMenu(true);
            }}
            className={`header__main-ham-menu ${showMenu ? "d-none" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="#333"
            width={30}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#333"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            onClick={() => setShowMenu(false)}
            className={`header__main-ham-menu-close ${
              showMenu ? "" : "d-none"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="#333"
            width={30}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#333"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
