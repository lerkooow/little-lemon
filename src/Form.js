export default function Form(time) {
    return (
        <form className="form">
            <div className="date">
                <label for="localdate">Date</label>
                <input type="date"></input>
            </div>
            <div className="date">
                <label for="time">Time</label>
                <select>
                    <optgroup label="Time">
                        <option>{time}</option>
                    </optgroup>
                </select>
            </div>
        </form>
    )
}