/* eslint-disable default-case */
import { useState } from "react";

export default function Reservation() {
    // State
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [request, setRequest] = useState("");

    // State, который отражает были ли мы внутри input
    const [firstDirty, setFirstDirty] = useState(false);
    const [lastDirty, setLastDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    // State Error
    const [firstError, setFirstError] = useState("First name is required");
    const [lastError, setLastError] = useState("Last name is required");
    const [phoneError, setPhoneError] = useState("Phone number is required");
    const [emailError, setEmailError] = useState("Email is required");
    const [passwordError, setPasswordError] = useState("Password is required");

    const [reservationConfirmed, setReservationConfirmed] = useState(false);

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
            case "email":
                setEmailDirty(true)
                break
            case "password":
                setPasswordDirty(true)
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
        if (e.target.value.length < 7) {
            setPhoneError("Shorter than 7 characters")
            if (!e.target.value) {
                setPhoneError("Phone number is required")
            }
        } else {
            setPhoneError("")
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\].,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Don't correct email")
            if (!e.target.value) {
                setEmailError("Email is required")
            }
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 10) {
            setPasswordError("Password must be at least 3 and not longer than 10 characters")
            if (!e.target.value) {
                setPasswordError("Password is required")
            }
        } else {
            setPasswordError("")
        }
    }

    const requestHandler = (e) => {
        setRequest(e.target.value)
    }

    const continueHandler = () => {
        if (firstError || lastError || phoneError || emailError || passwordError) {
            setFirstDirty(true);
            setLastDirty(true);
            setPhoneDirty(true);
            setEmailDirty(true);
            setPasswordDirty(true);
        } else {
            setReservationConfirmed(true);

            // Очищаем форму
            setFirst("");
            setLast("");
            setPhone("");
            setEmail("");
            setPassword("");
            setRequest("");
            setFirstDirty(false);
            setLastDirty(false);
            setPhoneDirty(false);
            setEmailDirty(false);
            setPasswordDirty(false);
        }
    };


    return (
        <main className="reservation">
            <div className="wrapper">
                <div className="wrapper_color">
                    <div className="title_reservation">
                        <h1 className="h1_reservation">Little Lemon</h1>
                        <h2 className="h2_reservation">Chicago</h2>
                        <h3 className="h3_reservation">Sign in to collect points</h3>
                    </div>
                    <form className="information_reservation">
                        <div className="first_name">
                            <label>First name</label><br></br>
                            <input onChange={e => firstHandler(e)} value={first} onBlur={e => blurHandler(e)} name="first" type="text" placeholder="First name"></input>
                            {firstDirty && <div style={{ color: "red" }}>{firstError}</div>}
                        </div>
                        <div className="Last_name">
                            <label>Last name</label><br></br>
                            <input onChange={e => lastHandler(e)} value={last} onBlur={e => blurHandler(e)} name="last" type="text" placeholder="Last name"></input>
                            {lastDirty && <div style={{ color: "red" }}>{lastError}</div>}
                        </div>
                        <div className="phone_number">
                            <label>Phone number</label><br></br>
                            <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" type="text" placeholder="Phone number"></input>
                            {phoneDirty && <div style={{ color: "red" }}>{phoneError}</div>}
                        </div>
                        <div className="email">
                            <label>Email</label><br></br>
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Email"></input>
                            {emailDirty && <div style={{ color: "red" }}>{emailError}</div>}
                        </div>
                        <div className="password">
                            <label>Password</label><br></br>
                            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Password"></input>
                            {passwordDirty && <div style={{ color: "red" }}>{passwordError}</div>}
                        </div>
                        {reservationConfirmed && (<div className="notification">Table reserved successfully!</div>)}
                    </form>
                    <div className="request">
                        <label>Request</label><br></br>
                        <textarea className="request_input" onChange={e => requestHandler(e)} value={request} type="text" placeholder="Add a special request (optional)" width={200} height={200}></textarea>
                    </div>
                    <div className="reservation_button">
                        <button className="continue_button" type="button" onClick={continueHandler}>
                            Continue
                        </button>
                    </div>
                </div>
            </div >
        </main >
    );
}
