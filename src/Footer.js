import restaurant from "./icons_assets/restaurant.png"


export default function Footer() {
    const navigations = ["Home", "About", "Menu", "Reservation", "Order online", "Login"];
    const contacts = ["Adress", "phone number", "email"];

    const footerNavigation = navigations.map((navigation) =>
        <li>
            <a className="navigation_link" href={navigation}>{navigation}</a>
        </li>)
    const footerContactLink = contacts.map((contact) =>
        <li>
            <a className="navigation_link" href={contact}>{contact}</a>
        </li>)

    return (
        <footer footer className="footer">
            <div className="wrapper">
                <img className="footer-restaurant" src={restaurant} alt="restaurant"></img>
                <h3 className="h3_navigation">Doormat Navigation</h3>
                <ul className="navigation_list">
                    {footerNavigation}
                </ul>
                <h3 className="h3_navigation">Contact</h3>
                <ul className="navigation_list">
                    {footerContactLink}
                </ul>
                <h3 className="h3_navigation">Social Media Links</h3>
                <ul className="navigation_list">
                    {footerContactLink}
                </ul>
            </div>

        </footer>
    )
}
