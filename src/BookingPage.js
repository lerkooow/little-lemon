export default function BookingPage() {
    const times = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    const timeSelect = times.map((time) =>
        <option>{time}</option>
    )
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const numberSelect = numbers.map((number) =>
        <option>{number}</option>
    )
    const occasions = ["Birthday", "Engagement", "Anniversary"]
    const occasionSelect = occasions.map((occasion) =>
        <option>{occasion}</option>
    )
    return (
        <main className="booking">
            <div className="wrapper">
                <div className="wrapper_color">
                    <div className="title_booking">
                        <h1 className="h1_booking">Little Lemon</h1>
                        <h2 className="h2_booking">Chicago</h2>
                        <h3 className="h3_booking">Find a table for any occasion</h3>
                    </div>
                    <form className="information">
                        <div className="date-time">
                            <div className="date">
                                <label for="localdate">Date</label><br></br>
                                <input type="date" required></input>
                            </div>
                            <div className="time">
                                <label for="time">Time</label><br></br>
                                <select className="time_select">
                                    <optgroup label="Time">
                                        {timeSelect}
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="number">
                            <label for="number">Number of Diners</label><br></br>
                            <select>
                                <optgroup label="Number">
                                    {numberSelect}
                                </optgroup>
                            </select>
                        </div>
                        <div className="ocassion">
                            <label for="occasion">Occasion</label><br></br>
                            <select>
                                <optgroup label="Occasion">
                                    {occasionSelect}
                                </optgroup></select>
                        </div>
                        <div className="radio">
                            <input name="side" type="radio" value="Inside"></input>
                            <label className="radio1" for="inside">Inside</label><br></br>
                            <input name="side" type="radio" value="Outside"></input>
                            <label className="radio1" for="outside">Outside</label><br></br>
                        </div>
                        <div className="booking_button">
                            <button className="go_button" type="button" value="Lets go">
                                <a href="/reservation">Lets go</a>
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </main >
    );
}
