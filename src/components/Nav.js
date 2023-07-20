import "../style/Nav.css"


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
        href: "/booking"
    },
    {
        name: "Order Online",
        href: "/order-online"
    },
    {
        name: "Login",
        href: "/login"
    }
    ];
    const navbarLink = navbars.map((navbar) =>
        <li className="nav_item">
            <a className="nav_link" href={navbar.href}>{navbar.name}</a>
        </li>
    )
    return (
        <nav className="nav">
            <ul className="nav_list">
                {navbarLink}
            </ul>
        </nav>
    );
}
