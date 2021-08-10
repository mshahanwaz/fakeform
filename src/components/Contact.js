import React, { useState } from "react";
import "./Contact.css";
import Upload from "./Upload";

function Contact({ data }) {
  const [newData, setNewData] = useState({
    ...data,
    email: "",
    phone: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newData.email && newData.phone) {
      console.log(newData);
      setRedirect(true);
    } else {
      alert("Some data fields are missing!");
    }
  };
  return redirect ? (
    <Upload data={newData} />
  ) : (
    <div className="contact">
      <h2 className="contact-h2">Contact Details</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Email address"
          value={newData.email}
          onChange={(e) => setNewData({ ...newData, email: e.target.value })}
          autoComplete="none"
          autoFocus
        />
        <input
          type="tel"
          placeholder="Phone no."
          value={newData.phone}
          onChange={(e) => setNewData({ ...newData, phone: e.target.value })}
          autoComplete="none"
        />
        <input type="submit" value="Proceed" className="contact-form-link" />
      </form>
    </div>
  );
}

export default Contact;
