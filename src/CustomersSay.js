export default function CustomersSay({ rating, avatar, name, review }) {
    return (
        <div className="testimonials_block">
            <h2 className="rating">{rating}</h2>
            <div className="avatar_name">
                <img className="avatar" src={avatar} alt="avatar"></img>
                <h2 className="name">{name}</h2>
            </div>
            <h2 className="review">{review}</h2>
        </div>
    )
}