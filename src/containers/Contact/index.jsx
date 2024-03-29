import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import Title from "../../components/Title";
import Message from "../../components/Message";
import contactImg from "../../assets/contact-pink.jpg";

const Contact = ({ setContactVisible }) => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const section = useRef(null);
  useEffect(() => {
    let options = {
      rootMargin: "50px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setContactVisible(true);
      } else {
        setContactVisible(false);
      }
    }, options);
    observer.observe(section.current);
  }, [section]);

  const sendEmail = (e) => {
    e.preventDefault();
    const value = [
      form.current[0].value,
      form.current[1].value,
      form.current[2].value,
      form.current[3].value,
    ];
    if (value.includes("")) {
      console.log("form vació");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      setSuccess(true);
      emailjs
        .sendForm(
          "service_xatg6gi",
          "template_4x3byze",
          form.current,
          "STkwfQTM519ZxYxFL"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    }
  };
  return (
    <section ref={section} id="contact" className="contact-section">
      <Title title="Contact" />
      <div className="container">
        <div className="contact-container">
          <img
            className="contact-container__img"
            src={contactImg}
            alt="contact-img"
          />
          <div className="contact-form">
            <h3>Let's work together!</h3>
            <span>Send me a message so we can be in touch</span>
            <form ref={form} onSubmit={sendEmail} action="">
              <input type="text" name="name" placeholder="Your name" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                rows="5"
                cols="20"
              />
              <button type="submit">Send message</button>
            </form>
            {error && !success ? (
              <Message
                message={"All fields has to be filled"}
                type={"error-message"}
              />
            ) : null}
            {success && !error ? (
              <Message
                message={"Your message was successfully sent!"}
                type={"success-message"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
