import restauranfood from "./icons_assets/restauranfood.jpg"

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
                </div>
            </section>
        </main>
    );
}
