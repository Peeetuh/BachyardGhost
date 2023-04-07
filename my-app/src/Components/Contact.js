import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zv3ajxq",
        "template_7hf02nv",
        form.current,
        "Zw1rwRU2oB9QO_fTy"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location = "/";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact-div">
      <form ref={form} onSubmit={sendEmail}>
        <h3 id="contact-h3">Contact For Inquiries</h3>
        <label>Name</label>
        <input type="text" name="user_name" className="name-email" />
        <label>Email</label>
        <input type="email" name="user_email" className="name-email" />
        <label>Message</label>
        <textarea id="msg-area" name="message" />
        <input type="submit" value="Send" className="message-input" />
      </form>
    </div>
  );
};

export default Contact;
