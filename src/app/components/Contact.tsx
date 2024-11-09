'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import '../Styles/Contact.css';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  theme: string;
};

function ContactForm({ theme }: ContactFormProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submit formData=", formData);

    emailjs
      .send(
        "service_7uxwgnv",
        "template_k8xbx9l",
        formData,
        "ri2zM5TR8tF00VTDn"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return isClient ? (
    <section
      id="contact"
      className={`contact-section ${theme === 'dark' ? 'dark' : 'light'}`}
    >
      <h2 className="contact-heading">
        Contact Me
      </h2>

      <p className="contact-text">
        If you&apos;d like to connect, feel free to reach out via my social
        media links or send me a message using the form below:
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`contact-form-item ${theme === 'dark' ? 'dark' : ''}`}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`contact-form-item ${theme === 'dark' ? 'dark' : ''}`}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={`contact-form-item ${theme === 'dark' ? 'dark' : ''}`}
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="contact-form-button"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="submitted-message">Thank you for your message!</p>
      )}
    </section>
  ) : (
    <div>Loading...</div>
  );
}

export default ContactForm;
