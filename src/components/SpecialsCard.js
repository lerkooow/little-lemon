import "../style/SpecialsCard.css"

export default function SpecialsCard({ id, img, title, price, info, link, icon }) {
    return (
        <div className="specials_card">
            <div className="specials_card-img">
                <img className="card-img" src={img} alt="greeksalad"></img>
            </div>
            <div className="card_info">
                <div className="card_wrapper">
                    <h3 className="specials_card-title">
                        {title}
                    </h3>
                    <h3 className="specials_card-price">{price}</h3>
                </div>
                <h4 className="specials_card-info">{info}</h4>
                <h3 className="specials_card-price_tel">{price}</h3>
                <div className="card_order">
                    <a className="greeksalad_link" href={title}>{link}</a>
                    <img className="bike" src={icon} alt="bike"></img>
                </div>
            </div>
        </div>
    )
}