/* eslint-disable default-case */
import "../style/BookingForm.css"

import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { fetchAPI } from "../API";


export default function BookingForm() {

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("13:00");
    const [number, setNumber] = useState("1");
    const [ocassion, setOcassion] = useState("Birthday");
    const [side, setSide] = useState("Inside")
    const [wishes, setWishes] = useState("")

    function initializeTimes() {
        return ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    }

    function updateTimes(action) {

        const slots = fetchAPI(new Date(action.date));

        return slots;

    }
    useEffect(() => {
        // а
        if (date) {
            setAvailableTimes({ date });
        }
    }, [date])


    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes())
    const timeSelect = availableTimes.map((time) =>
        <option key={time}>{time}</option>
    )
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const numberSelect = numbers.map((number) =>
        <option key={number}>{number}</option>
    )
    const occasions = ["Birthday", "Engagement", "Anniversary"]
    const occasionSelect = occasions.map((occasion) =>
        <option key={occasion}>{occasion}</option>
    )


    const state = {
        first, last, phone, date, time, number, ocassion, side, wishes
    }

    const { state: locationState } = useLocation();

    useEffect(() => {
        if (locationState) {
            setFirst(locationState.first)
            setLast(locationState.last)
            setPhone(locationState.phone)
            setDate(locationState.date)
            setTime(locationState.time)
            setNumber(locationState.number)
            setOcassion(locationState.ocassion)
            setSide(locationState.side)
            setWishes(locationState.wishes)
        }

    }, [locationState])

    const [isFirstNameFilled, setIsFirstNameFilled] = useState(false);
    const [isLastNameFilled, setIsLastNameFilled] = useState(false);
    const [isPhoneNumberFilled, setIsPhoneNumberFilled] = useState(false);
    const [isDateFilled, setIsDateFilled] = useState(false);

    // Функция для проверки заполненности полей
    const checkFormCompletion = () => {
        if (first && last && phone && date) {
            setIsFirstNameFilled(true);
            setIsLastNameFilled(true);
            setIsPhoneNumberFilled(true);
            setIsDateFilled(true);
        } else {
            setIsFirstNameFilled(false);
            setIsLastNameFilled(false);
            setIsPhoneNumberFilled(false);
            setIsDateFilled(false);
        }
    };

    useEffect(() => {
        checkFormCompletion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [first, last, phone, date]);


    // State, который отражает были ли мы внутри input
    const [firstDirty, setFirstDirty] = useState(false);
    const [lastDirty, setLastDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [dateDirty, setDateDirty] = useState(false);
    console.log("🚀 ~ file: BookingForm.js:85 ~ BookingForm ~ dateDirty:", dateDirty)



    // State Error
    const [firstError, setFirstError] = useState("First name is required");
    const [lastError, setLastError] = useState("Last name is required");
    const [phoneError, setPhoneError] = useState("Phone number is required");
    const [dateError, setDateError] = useState("Date is required");
    console.log("🚀 ~ file: BookingForm.js:93 ~ BookingForm ~ dateError:", dateError)




    const blurHandler = (e) => {
        console.log("🚀 ~ file: BookingForm.js:101 ~ blurHandler ~ e.target.name:", e.target.name)
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
        setDate(e.target.value);
        console.log("🚀 ~ file: BookingForm.js:176 ~ dateHandler ~ e.target.value:", e.target.value)

        if (!e.target.value) {
            setDateError("Date is required");
            console.log("d")
        } else {
            setDateError("");
        }

    };

    const timeHandler = (e) => {
        setTime(e.target.value)
    }

    const numberHandler = (e) => {
        setNumber(e.target.value)
    }

    const ocassionHandler = (e) => {
        setOcassion(e.target.value)
    }

    const wishesHandler = (e) => {
        setWishes(e.target.value)
    }


    const onOptionChange = e => {
        setSide(e.target.value)
    }



    return (
        <form data-testid="form" className="information">
            <div className="first-last">
                <div className="first_name">
                    <label htmlFor="first">First name<span>*</span></label><br></br>
                    <input
                        data-testid="first"
                        onChange={e => firstHandler(e)}
                        value={first}
                        onBlur={e => blurHandler(e)}
                        name="first"
                        type="text"
                        placeholder="First name">
                    </input>
                    {firstDirty && <div data-testid="error1" style={{ color: "red" }}>{firstError}</div>}
                </div>
                <div className="Last_name">
                    <label htmlFor="last">Last name<span>*</span></label><br></br>
                    <input
                        data-testid="last"
                        onChange={e => lastHandler(e)}
                        value={last}
                        onBlur={e => blurHandler(e)}
                        name="last"
                        type="text"
                        placeholder="Last name">
                    </input>
                    {lastDirty && <div data-testid="error2" style={{ color: "red" }}>{lastError}</div>}
                </div>
            </div>
            <div className="phone_number">
                <label htmlFor="phone">Phone number<span>*</span></label><br></br>
                <input
                    data-testid="phone"
                    onChange={e => phoneHandler(e)}
                    value={phone}
                    onBlur={e => blurHandler(e)}
                    name="phone"
                    className="phone"
                    type="tel"
                    pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                    placeholder="1xxxxxxxxxx">
                </input>
                <p>*Phone number is needed to clarify and remind the reservation</p>
                {phoneDirty && <div style={{ color: "red" }}>{phoneError}</div>}
            </div>
            <div className="date-time">
                <div className="date">
                    <label htmlFor="localdate">Date<span>*</span></label><br></br>
                    <input
                        name="date"
                        className="date"
                        onChange={e => dateHandler(e)}
                        onBlur={e => blurHandler(e)}
                        value={date} type="date">
                    </input>
                    {dateDirty && <div style={{ color: "red" }}>{dateError}</div>}
                </div>
                <div className="time">
                    <label htmlFor="time">Time<span>*</span></label><br></br>
                    <select
                        onChange={e => timeHandler(e)}
                        value={time}
                        className="time_select">
                        <optgroup label="Time">
                            {timeSelect}
                        </optgroup>
                    </select>

                </div>
            </div>
            <div className="number">
                <label htmlFor="number">Number of guests<span>*</span></label><br></br>
                <select
                    onChange={e => numberHandler(e)}
                    value={number}
                    className="number">
                    <optgroup label="Number">
                        {numberSelect}
                    </optgroup>
                </select>

            </div>
            <div className="ocassion">
                <label htmlFor="occasion">Occasion<span>*</span></label><br></br>
                <select
                    onChange={e => ocassionHandler(e)}
                    value={ocassion}
                    className="occasion">
                    <optgroup label="Occasion">
                        {occasionSelect}
                    </optgroup>
                </select>

            </div>
            <div className="radio">
                <input
                    id="inside"
                    value="Inside"
                    name="side"
                    type="radio"
                    checked={side === "Inside"}
                    onChange={onOptionChange}>
                </input>
                <label htmlFor="radio" className="radio1">Inside</label><br></br>
                <input
                    id="outside"
                    value="Outside"
                    name="side"
                    type="radio"
                    checked={side === "Outside"}
                    onChange={onOptionChange}>
                </input>
                <label htmlFor="radio" className="radio1">Outside</label><br></br>
            </div>
            <div className="wishes">
                <label htmlFor="wishes">Wishes</label><br></br>
                <input
                    onChange={e => wishesHandler(e)}
                    value={wishes}
                    className="wishes_input"
                    type="text"
                    placeholder="Add a wishes (optional)">
                </input>
            </div>
            <div className="booking_button">
                {isFirstNameFilled && isLastNameFilled && isPhoneNumberFilled && isDateFilled ? (
                    <button
                        className="go_button"
                        type="submit"
                        aria-label="On Click">
                        <Link state={state} to="/agree">
                            Lets go
                        </Link>
                    </button>
                ) : (
                    <p className="all">Fill in all required fields</p>
                )}
            </div>
        </form >
    )
}
