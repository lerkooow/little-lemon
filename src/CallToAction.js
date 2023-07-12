import restauranfood from "./icons_assets/restauranfood.jpg"

export default function CallToAction() {
    return (
        <div className="intro_wrapper">
            <div className="info">
                <div className="name_restaurant">
                    <h1 className="title_info">Little Lemon</h1>
                    <h2 className="chicago">Chicago</h2>
                </div>
                <h3 className="text_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</h3>
                <button className="intro_button" type="button" value="Reserve a Table">
                    <a href="/booking">Reserve a Table</a>
                </button>
            </div>
            <img className="img_intro" src={restauranfood} alt="img_intro"></img>
        </div>
    )
}