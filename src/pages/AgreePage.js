import "../style/AgreePage.css"

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { submitAPI } from "../API";
import { useState } from "react";


export default function AgreePage() {

    const location = useLocation();

    const [book, setBook] = useState(true);

    const BookSubmit = () => {
        submitAPI(location);
        if (book) {
            setBook(false);
        }
    }


    return (
        <main className="agree">
            <div className="wrapper">
                <div className="wrapper_color">
                    <div className="back_button">
                        <button
                            aria-label="On Click"
                            className="back_b"
                            type="button">
                            <Link state={location.state} to="/booking">Back</Link>
                        </button>
                    </div>
                    <div className="title_agree">
                        <h1 className="h1_agree">Little Lemon</h1>
                        <h2 className="h2_agree">Chicago</h2>
                        <h3 className="h3_agree">To reserve a table, please check the details below</h3>
                    </div>
                    <div className="data_info">
                        <h2 className="first_agree">First name: <p className="data">{location.state?.first}</p></h2>
                        <h2 className="last_agree">Last name: <p className="data">{location.state?.last}</p></h2>
                        <h2 className="phone_agree">Phone number: <p className="data">{location.state?.phone}</p></h2>
                        <h2 className="date_agree">Date: <p className="data">{location.state?.date}</p></h2>
                        <h2 className="time_agree">Time: <p className="data">{location.state?.time}</p></h2>
                        <h2 className="number_agree">Number of Diners: <p className="data">{location.state?.number}</p></h2>
                        <h2 className="ocassion_agree">Ocassion: <p className="data">{location.state?.ocassion}</p></h2>
                        <h2 className="side_agree">Side:  <p className="data">{location.state?.side}</p></h2>
                        <h2 className="wishes_agree">Wishes: <p className="data">{location.state?.wishes}</p></h2>
                    </div>
                    <div className="operator">
                        <h4 className="question">Do you need a call from the operator to clarify the details of the reservation?</h4>
                        <input name="operator" type="radio" placeholder="Yes"></input>
                        <label htmlFor="radio" className="radio2">Yes</label><br></br>
                        <input name="operator" type="radio" placeholder="No" checked></input>
                        <label htmlFor="radio" className="radio2">No</label><br></br>
                    </div>
                    <div className="agree_text">
                        <h2 className="h2_agree_text">If all details are correct, complete your booking</h2>
                    </div>
                    <div className="agree_button">
                        {/* <button onClick={BookSubmit} type="submit" className="agree_b" value="Book">{book}</button> */}
                        {book ? (
                            <button
                                onClick={BookSubmit}
                                className="go_button"
                                type="submit"
                                aria-label="On Click"
                                value={book}>Book
                            </button>
                        ) : (
                            <p className="text_submit">Thanks for choosing, {location.state?.first}! See you {location.state?.date} at {location.state?.time}</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}