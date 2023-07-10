import Specials from "./Specials"

export default function SpecialsList({ specials }) {
    return (
        <div className="specials_cards">
            {specials.map((special) => (
                <Specials {...special} />
            ))}
        </div>
    )
}