import restauranfood from "./icons_assets/restauranfood.jpg"
import greeksalad from "./icons_assets/greeksalad.jpg"
import bike from "./icons_assets/Group.svg"
import bruchetta from "./icons_assets/bruchetta.png"
import lemondessert from "./icons_assets/lemondessert.jpg"


export default function Main() {
    return (
        <main className="main">
            <section className="intro">
                <div className="wrapper">
                    <div className="intro_wrapper">
                        <div className="info">
                            <div className="h1h2">
                                <h1 className="intro_title">Little Lemon</h1>
                                <h2 className="chicago">Chicago</h2>
                            </div>
                            <h3 className="intro_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</h3>
                            <input className="intro_b" type="button" value="Reserve a Table"></input>
                        </div>
                        <img className="img_intro" src={restauranfood} alt="img_intro"></img>
                    </div>
                </div>
            </section>
            <section className="specials">
                <div className="wrapper">
                    <div className="specials_wrapper">
                        <h2 className="h2_specials">Specials</h2>
                        <input className="specials_b" type="button" value="Online Menu"></input>
                    </div>
                    <div className="specials_cards">
                        {/* Card 1 */}
                        <div className="specials_card">
                            <div className="specials_card-pic">
                                <img className="card-img" src={greeksalad} alt="greeksalad"></img>
                            </div>
                            <div className="card_wrapper">
                                <h3 className="specials_card-title">
                                    Greek salad
                                </h3>
                                <h3 className="specials_card-price">$12.99</h3>
                            </div>
                            <h4 className="specials_card-info">The famous greek salad of crispy lettuce, peppers,
                                olives and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons. </h4>
                            <div className="card_order">
                                <a className="greeksalad_link" href="/greeksalad">Order a delivery</a>
                                <img className="bike" src={bike} alt="bike"></img>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="specials_card">
                            <div className="specials_card-pic">
                                <img className="card-img" src={bruchetta} alt="bruchetta"></img>
                            </div>
                            <div className="card_wrapper">
                                <h3 className="specials_card-title">
                                    Greek salad
                                </h3>
                                <h3 className="specials_card-price">$12.99</h3>
                            </div>
                            <h4 className="specials_card-info">The famous greek salad of crispy lettuce, peppers,
                                olives and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons. </h4>
                            <div className="card_order">
                                <a className="greeksalad_link" href="/greeksalad">Order a delivery</a>
                                <img className="bike" src={bike} alt="bike"></img>
                            </div>
                        </div>
                        {/* Card 3 */}

                        <div className="specials_card">
                            <div className="specials_card-pic">
                                <img className="card-img" src={lemondessert} alt="lemondessert"></img>
                            </div>
                            <div className="card_wrapper">
                                <h3 className="specials_card-title">
                                    Greek salad
                                </h3>
                                <h3 className="specials_card-price">$12.99</h3>
                            </div>
                            <h4 className="specials_card-info">The famous greek salad of crispy lettuce, peppers,
                                olives and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons. </h4>
                            <div className="card_order">
                                <a className="greeksalad_link" href="/greeksalad">Order a delivery</a>
                                <img className="bike" src={bike} alt="bike"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
