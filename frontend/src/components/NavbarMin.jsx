
/* eslint-disable react/prop-types */
export default function NavBarMin({ showMenu }) {
    return (
        <div className={`${!showMenu ? "header__sm-menu" : "header__sm-menu--active"}`
        }>
            <div className="header__sm-menu-content">
                <ul className="header__sm-menu-links">
                    <li className="header__sm-menu-link">
                        <a href="#home">Home</a>
                    </li>
                    <li className="header__sm-menu-link">
                        <a href="#about">About</a>
                    </li>
                    <li className="header__sm-menu-link">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="header__sm-menu-link">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}