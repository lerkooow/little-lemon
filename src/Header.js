import Nav from "./Nav"
import Logo from "./svg/Logo.svg"


export default function Header() {
    return (
        <header className="header">
            <img className="header_logo" src={Logo} alt="logo"></img>
            <Nav />
        </header>
    );
}
