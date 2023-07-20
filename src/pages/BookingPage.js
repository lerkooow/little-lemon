import "../style/BookingPage.css"

import BookingForm from "../components/BookingForm"


export default function BookingPage() {

    return (
        <main className="booking">
            <div className="wrapper">
                <div className="wrapper_color">
                    <div className="title_booking">
                        <h1 className="h1_booking">Little Lemon</h1>
                        <h2 className="h2_booking">Chicago</h2>
                        <h3 className="h3_booking">Find a table for any occasion</h3>
                        <h4 className="h4_booking"><span>*</span> Required input</h4>
                    </div>
                    <BookingForm />
                </div>
            </div >
        </main >
    );
}