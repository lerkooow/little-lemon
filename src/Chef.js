import marioandadrian from "./icons_assets/AandM2.png"
import chef from "./icons_assets/chef1.png"



export default function Chef() {
    return (
        <div className="chef_info">
            <div className="chef_wrapper">
                <div className="title_chicago">
                    <h2 className="chef_title">Little Lemon</h2>
                    <h3 className="chef_chicago">Chicago</h3>
                    <h4 className="chef_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. </h4>
                </div>
                <div className="chef_img">
                    <img className="restChef_img" src={chef} alt="restuarantChef"></img>
                    <img className="MandA_img" src={marioandadrian} alt="MarioAndAdrian"></img>
                </div>
            </div>
        </div>
    )
}