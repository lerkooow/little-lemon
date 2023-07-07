export default function Nav() {
    return (
        <nav className="header_nav">
            <ul className="header_list">
                <li className="header_item">
                    <a className="header_link" href="/home">Home</a>
                </li>
                <li className="header_item">
                    <a className="header_link" href="/about">About</a>
                </li>
                <li className="header_item">
                    <a className="header_link" href="/menu">Menu</a>
                </li>
                <li className="header_item">
                    <a className="header_link" href="/reservation">Reservation</a>
                </li>
                <li className="header_item">
                    <a className="header_link" href="/order-online">Order online</a>
                </li>
                <li className="header_item">
                    <a className="header_link" href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}
