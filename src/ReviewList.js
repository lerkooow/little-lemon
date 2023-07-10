import Review from "./Review"

export default function ReviewList({ reviews }) {
    return (
        <div className="testimonials_blocks">
            {reviews.map((review) => (
                <Review {...review} />
            ))}
        </div>
    )
}
