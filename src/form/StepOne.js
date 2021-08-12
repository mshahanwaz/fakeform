import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/styles.css";

function StepOne() {
  const [data, setData] = useState(null);
  const fetchedData = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setData({ ...fetchedData, active: 0 });
  }, [fetchedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: { ...data, stepOne: 1, stepTwo: 0, stepThree: 0 },
    });
  };

  return (
    <div>
      <h2 className="title">Personal details</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="First name"
          value={data?.firstName}
          onChange={(e) => {
            setData({ ...data, firstName: e.target.value });
          }}
          pattern="[A-Za-z]{1,32}"
          autoFocus
          required
        />
        <input
          type="text"
          placeholder="Last name"
          value={data?.lastName}
          onChange={(e) => {
            setData({ ...data, lastName: e.target.value });
          }}
          pattern="[A-Za-z]{1,32}"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={data?.age}
          onChange={(e) => {
            setData({ ...data, age: e.target.value });
          }}
          min="10"
          max="100"
          required
        />
        <select
          value={data?.gender}
          onChange={(e) => {
            setData({ ...data, gender: e.target.value });
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="hidden">Rather not to say</option>
        </select>
        <input type="submit" value="Proceed" />
      </form>
    </div>
  );
}

export default StepOne;
