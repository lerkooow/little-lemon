import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
  render(
    <Router>
      <BookingForm />
    </Router>,
  );
  const firtsElement = screen.getByTestId("first");
  const lastElement = screen.getByTestId("last");
  const phoneElement = screen.getByTestId("phone");
  fireEvent.change(firtsElement, { target: { value: "V" } })
  fireEvent.focusOut(firtsElement)
  const error1Element = screen.getByTestId("error1");
  expect(error1Element.value).toBe()
  fireEvent.change(lastElement, { target: { value: "Akh" } })
  fireEvent.focusOut(lastElement)
  const error2Element = screen.getByTestId("error2");
  expect(error2Element.value).toBe()
  fireEvent.change(phoneElement, { target: { value: "1" } })
  expect(phoneElement.value).toBe("1")
})