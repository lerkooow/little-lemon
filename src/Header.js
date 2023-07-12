import Nav from "./Nav"
import Logo from "./icons_assets/Logo.svg"
import burger from "./icons_assets/burger_menu.svg"


export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="burger">
                    <img className="img_burger" src={burger} alt="burger-menu"></img>
                    <img className="header_logo" src={Logo} alt="logo"></img>
                </div>
                <div className="header_wrapper">
                    <img className="header_logo" src={Logo} alt="logo"></img>
                    <Nav />
                </div>
            </div>
        </header>
    );
}
