import restauranfood from "./icons_assets/restauranfood.jpg"


export default function Intro() {
    return (
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
    )
}