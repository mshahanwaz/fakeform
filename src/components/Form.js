import React, { useState } from "react";
import Contact from "./Contact";
import "./Form.css";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
  });
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit console.log");
    if (data.firstName && data.lastName && data.age && data.gender) {
      setRedirect(true);
    } else {
      alert("Some data fields are missing!");
    }
  };

  return redirect ? (
    <Contact data={data} />
  ) : (
    <div className="form">
      <h2 className="form-h2">Personal Details</h2>
      <form onSubmit={handleSubmit} className="form-form">
        <input
          type="text"
          placeholder="First name"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          autoComplete="none"
          autoFocus
        />
        <input
          type="text"
          placeholder="Last name"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          autoComplete="none"
        />
        <input
          type="number"
          placeholder="Age"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
          autoComplete="none"
        />
        <select
          value={data.gender}
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="hidden">Rather not to say</option>
        </select>
        <input type="submit" className="form-form-link" value="Proceed" />
      </form>
    </div>
  );
}

export default Form;
