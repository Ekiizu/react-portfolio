import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
            style={{
                background: 'linear-gradient(to right,rgb(127, 226, 132),rgb(254, 123, 156))', // Gradient from pink to orange
            }}
        >
            <div className="navbar-brand">
                <a className="navbar-item white-text" href="/">
                    <strong>Ekiizu Portfolio</strong>
                </a>

                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={() => {
                        const burger = document.querySelector('.navbar-burger');
                        const menu = document.querySelector('.navbar-menu');
                        burger.classList.toggle('is-active');
                        menu.classList.toggle('is-active');
                    }}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <Link to="/about" className="navbar-item">
                        About
                    </Link>
                    <Link to="/contact" className="navbar-item">
                        Contact
                    </Link>
                    <Link to="/projects" className="navbar-item">
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
