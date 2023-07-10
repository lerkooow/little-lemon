import greeksalad from "./icons_assets/greeksalad.jpg"
import bike from "./icons_assets/Group.svg"
import bruchetta from "./icons_assets/bruchetta.png"
import lemondessert from "./icons_assets/lemondessert.jpg"
import avatar1 from "./icons_assets/avatar1.jpg"
import avatar2 from "./icons_assets/avatar2.jpg"
import avatar3 from "./icons_assets/avatar3.jpg"
import avatar4 from "./icons_assets/avatar4.jpg"

import CustomersSay from "./CustomersSay"
import Specials from "./Specials"
import CallToAction from "./CallToAction"
import Chicago from "./Chicago"





export default function Main() {
    // Specials
    const specials = [{
        id: "greeksalad",
        img: greeksalad,
        title: "Greek Salad",
        price: "$" + 12.99,
        info: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        link: "Order a delivery",
        icon: bike
    },
    {
        id: "bruchetta",
        img: bruchetta,
        title: "Bruchetta",
        price: "$" + 5.99,
        info: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        link: "Order a delivery",
        icon: bike
    },
    {

        id: "lemondessert",
        img: lemondessert,
        title: "Lemon Dessert",
        price: "$" + 5 + ".00",
        info: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        link: "Order a delivery",
        icon: bike
    },];

    // Reviews
    const reviews = [{
        rating: 4.8,
        avatar: avatar1,
        name: "Mark",
        review: "Amazing food and friendly staff!"
    },
    {

        rating: 4.9,
        avatar: avatar2,
        name: "Elizabeth",
        review: "Cozy ambiance, delicious dishes."
    },
    {

        rating: "5.0",
        avatar: avatar3,
        name: "Ben",
        review: "Beautiful decor and mouthwatering food."
    },
    {

        rating: 4.9,
        avatar: avatar4,
        name: "Liza",
        review: "Exquisite flavors and impeccable service."
    }];

    return (
        <main className="main">
            <section className="intro">
                <div className="wrapper">
                    <CallToAction />
                </div>
            </section>
            <section className="specials">
                <div className="wrapper">
                    <div className="specials_wrapper">
                        <h2 className="h2_specials">Specials</h2>
                        <input className="specials_b" type="button" value="Online Menu"></input>
                    </div>
                    <div className="specials_cards">
                        {specials.map((special) => (
                            <Specials {...special} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <div className="wrapper">
                    <h2 className="h2_testimonials">Testimonials</h2>
                    <div className="testimonials_blocks">
                        {reviews.map((review) => (
                            <CustomersSay {...review} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="chicago">
                <div className="wrapper">
                    <Chicago />
                </div>
            </section>
        </main>
    );
}
