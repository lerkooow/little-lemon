import restaurant from "./icons_assets/restaurant.png"


export default function Footer() {
    const navigations = [
        {
            name: "Home",
            href: "/home"
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
    const contacts = [
        {
            name: "Adress",
            href: "/adress"
        },
        {
            name: "phone number",
            href: "/phone-number"
        },
        {
            name: "email",
            href: "/email"
        }]
        ;

    const footerNavigation = navigations.map((navigation) =>
        <li>
            <a className="navigation_link" href={navigation.href}>{navigation.name}</a>
        </li>)
    const footerContactLink = contacts.map((contact) =>
        <li>
            <a className="navigation_link" href={contact.href}>{contact.name}</a>
        </li>)

    return (
        <footer footer className="footer">
            <div className="wrapper">
                <div className="footer_wrapper">
                    <img className="img_footer" src={restaurant} alt="restaurant"></img>
                    <div className="footer_navigation">
                        <h3 className="h3_navigation">Doormat Navigation</h3>
                        <ul className="navigation_list">
                            {footerNavigation}
                        </ul>
                    </div>
                    <div className="footer_contact">
                        <h3 className="h3_navigation">Contact</h3>
                        <ul className="navigation_list">
                            {footerContactLink}
                        </ul>
                    </div>
                    <div className="footer_link">
                        <h3 className="h3_navigation">Social Media Links</h3>
                        <ul className="navigation_list">
                            {footerContactLink}
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}
