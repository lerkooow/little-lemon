export default function Nav() {
    return (
        <nav className="header_nav">
            <ul className="header_list">
                <li className="header_item">
                    <a href="/home">Home</a>
                </li>
                <li className="header_item">
                    <a href="/about">About</a>
                </li>
                <li className="header_item">
                    <a href="/menu">Menu</a>
                </li>
                <li className="header_item">
                    <a href="/reservation">Reservation</a>
                </li>
                <li className="header_item">
                    <a href="/order-online">Order online</a>
                </li>
                <li className="header_item">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}
