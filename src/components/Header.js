import "../style/Header.css"

import Nav from "../components/Nav"
import Logo from "../icons_assets/Logo.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header_wrapper">
                    <img className="header_logo" src={Logo} alt="logo"></img>
                    <Nav />
                </div>
            </div>
        </header>
    );
}
