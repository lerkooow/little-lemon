export default function Nav() {
    const navbars = ["Home", "About", "Menu", "Reservation", "Order online", "Login"];
    const navbarLink = navbars.map((navbar) =>
        <li className="header_item">
            <a className="header_link" href={navbar}>{navbar}</a>
        </li>
    )
    return (
        <nav className="header_nav">
            <ul className="header_list">
                {navbarLink}
            </ul>
        </nav>
    );
}
