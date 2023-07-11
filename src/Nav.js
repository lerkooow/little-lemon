export default function Nav() {
    const navbars = [{
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Menu",
        href: "/menu"
    },
    {
        name: "Reservation",
        href: "/reservation"
    },
    {
        name: "Order online",
        href: "/order-online"
    },
    {
        name: "Login",
        href: "/login"
    }
    ];
    const navbarLink = navbars.map((navbar) =>
        <li className="header_item">
            <a className="header_link" href={navbar.href}>{navbar.name}</a>
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
