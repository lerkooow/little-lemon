import marioandadrian from "./icons_assets/AandM2.png"
import chicago from "./icons_assets/chef1.png"



export default function Chicago() {
    return (
        <div className="chicago_info">
            <div className="chicago_wrapper">
                <div className="title_chicago">
                    <h2 className="chicago_title">Little Lemon</h2>
                    <h3 className="chicago_chicago">Chicago</h3>
                    <h4 className="chicago_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. </h4>
                </div>
                <div className="chicago_img">
                    <img className="restchicago_img" src={chicago} alt="restuarantchicago"></img>
                    <img className="MandA_img" src={marioandadrian} alt="MarioAndAdrian"></img>
                </div>
            </div>
        </div>
    )
}