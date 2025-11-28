import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon 😊");
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Have questions or want custom resin artwork?  
          We're just a message away! 💬✨
        </p>
        <p><strong>📞 WhatsApp:</strong> +91 9876543210</p>
        <p><strong>📍 Location:</strong> Chennai, India</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message ✨</button>
      </form>
    </div>
  );
};

export default Contact;
