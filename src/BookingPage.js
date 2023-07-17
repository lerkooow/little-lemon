/* eslint-disable default-case */
import { useState } from "react";


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

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState("");
    const [ocassion, setOcassion] = useState("");

    // State, который отражает были ли мы внутри input
    const [firstDirty, setFirstDirty] = useState(false);
    const [lastDirty, setLastDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [dateDirty, setDateDirty] = useState(false);



    // State Error
    const [firstError, setFirstError] = useState("First name is required");
    const [lastError, setLastError] = useState("Last name is required");
    const [phoneError, setPhoneError] = useState("Phone number is required");
    const [dateError, setDateError] = useState("Date is required");

    // Button
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    const letsHandler = () => {
        if (firstError || lastError || phoneError) {
            setFirstDirty(true);
            setLastDirty(true);
            setPhoneDirty(true);
            setDateDirty(true);
        } else {
            setReservationConfirmed(true);

            // Очищаем форму
            setFirst("");
            setLast("");
            setPhone("");
            setDate("");
            setTime("");
            setNumber("");
            setOcassion("");

            setFirstDirty(false);
            setLastDirty(false);
            setPhoneDirty(false);
            setDateDirty(false);

        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "first":
                setFirstDirty(true)
                break
            case "last":
                setLastDirty(true)
                break
            case "phone":
                setPhoneDirty(true)
                break
            case "date":
                setDateDirty(true)
                break
        }
    }

    const firstHandler = (e) => {
        setFirst(e.target.value)
        if (e.target.value.length < 2 || typeof e.target.value != "string") {
            setFirstError("Shorter than 2 characters or invalid input")
            if (!e.target.value) {
                setFirstError("First name is required")
            }
        } else {
            setFirstError("")
        }
    }

    const lastHandler = (e) => {
        setLast(e.target.value)
        if (e.target.value.length < 4 || typeof e.target.value != "string") {
            setLastError("Shorter than 4 characters or invalid input")
            if (!e.target.value) {
                setLastError("Last name is required")
            }
        } else {
            setLastError("")
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 15) {
            setPhoneError("Invalid input")
            if (!e.target.value) {
                setPhoneError("Phone number is required")
            }
        } else {
            setPhoneError("")
        }
    }

    const dateHandler = (e) => {
        setDate(e.target.value)
        if (!e.target.value) {
            setDateError("Date is required")
        } else {
            setDateError("")
        }
    }

    const timeHandler = (e) => {
        setTime(e.target.value)
    }

    const numberHandler = (e) => {
        setNumber(e.target.value)
    }

    const ocassionHandler = (e) => {
        setOcassion(e.target.value)
    }


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
                        <div className="first-last">
                            <div className="first_name">
                                <label><span>*</span>First name</label><br></br>
                                <input onChange={e => firstHandler(e)} value={first} onBlur={e => blurHandler(e)} name="first" type="text" placeholder="First name"></input>
                                {firstDirty && <div style={{ color: "red" }}>{firstError}</div>}
                            </div>
                            <div className="Last_name">
                                <label><span>*</span>Last name</label><br></br>
                                <input onChange={e => lastHandler(e)} value={last} onBlur={e => blurHandler(e)} name="last" type="text" placeholder="Last name"></input>
                                {lastDirty && <div style={{ color: "red" }}>{lastError}</div>}
                            </div>
                        </div>
                        <div className="phone_number">
                            <label><span>*</span>Phone number</label><br></br>
                            <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" className="phone" type="tel" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" placeholder="1xxxxxxxxxx"></input>
                            <p>*Phone number is needed to clarify and remind the reservation</p>
                            {phoneDirty && <div style={{ color: "red" }}>{phoneError}</div>}
                        </div>
                        <div className="date-time">
                            <div className="date">
                                <label for="localdate"><span>*</span>Date</label><br></br>
                                <input onChange={e => dateHandler(e)} onBlur={e => blurHandler(e)} value={date} type="date" required></input>
                                {dateDirty && <div style={{ color: "red" }}>{dateError}</div>}
                            </div>
                            <div className="time">
                                <label for="time"><span>*</span>Time</label><br></br>
                                <select onChange={e => timeHandler(e)} value={time} className="time_select">
                                    <optgroup label="Time">
                                        {timeSelect}
                                    </optgroup>
                                </select>

                            </div>
                        </div>
                        <div className="number">
                            <label for="number"><span>*</span>Number of Diners</label><br></br>
                            <select onChange={e => numberHandler(e)} value={number} className="number">
                                <optgroup label="Number">
                                    {numberSelect}
                                </optgroup>
                            </select>

                        </div>
                        <div className="ocassion">
                            <label for="occasion"><span>*</span>Occasion</label><br></br>
                            <select onChange={e => ocassionHandler(e)} value={ocassion} className="occasion">
                                <optgroup label="Occasion">
                                    {occasionSelect}
                                </optgroup>
                            </select>

                        </div>
                        <div className="radio">
                            <input name="side" type="radio" placeholder="Inside" checked></input>
                            <label className="radio1" for="inside">Inside</label><br></br>
                            <input name="side" type="radio" placeholder="Outside"></input>
                            <label className="radio1" for="outside">Outside</label><br></br>

                        </div>
                        <div className="wishes">
                            <label>Wishes</label><br></br>
                            <input className="wishes_input" type="text" placeholder="Add a wishes (optional)"></input>
                        </div>
                        <div className="booking_button">
                            <button onClick={letsHandler} className="go_button" type="button">
                                <a href="\agree">Lets go</a>
                            </button>
                        </div>
                        {reservationConfirmed && (<div className="notification"></div>)}
                    </form>
                </div>
            </div >
        </main >
    );
}
