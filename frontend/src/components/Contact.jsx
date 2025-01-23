/* eslint-disable react/prop-types */

import { useReducer, useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export default function Contact({ setOpen, setSnackbarMessage }) {
  const [{ name, email, message }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [isDisabled, setIsDisabled] = useState(false);

  async function handleSendMail(e) {
    e.preventDefault();
    setIsDisabled(true);
    const data = { name, email, message };
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      setIsDisabled(false);
      setOpen(true);
      setSnackbarMessage("Message sent successfully");
    } catch (err) {
      setIsDisabled(false);
      setSnackbarMessage("Something went wrong");
      console.log(err);
    }
  }
  return (
    <section id="contact" className="contact">
      <div className="main-container">
        <h2 className="heading-secondary">
          <span className="heading-sec__main">Contact</span>
          <span className="heading-sec__sub">
            Feel free to Contact me by submitting the form below and I will get
            back to you soon as possible
          </span>
        </h2>

        <div className="contact__form-container">
          <form onSubmit={handleSendMail} className="contact__form">
            <div className="contact__form-field">
              <label htmlFor="name" className="contact__form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) =>
                  dispatch({ type: "NAME", payload: e.target.value })
                }
                required
                placeholder="Enter Your Name"
                className="contact__form-input"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label htmlFor="email" className="contact__form-label">
                Email
              </label>
              <input
                value={email}
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
                required
                placeholder="Enter Your Email"
                className="contact__form-input"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label htmlFor="message" className="contact__form-label">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) =>
                  dispatch({ type: "MESSAGE", payload: e.target.value })
                }
                required
                cols={30}
                rows={10}
                placeholder="Enter Your Message"
                className="contact__form-input"
                type="email"
                name="message"
                id="message"
                spellCheck={false}
              />
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              onClick={handleSendMail}
              className={`${
                isDisabled ? "btn-disabled" : "btn btn--med contact__btn"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
