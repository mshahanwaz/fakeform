import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      payload: { ...data, stepOne: 1, stepTwo: 1, stepThree: 0 },
    });
  };

  return (
    <div>
      <h2 className="title">Contact details</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Email"
          value={data?.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
            dispatch({ type: "ADD", payload: { email: e.target.value } });
          }}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          autoFocus
          required
        />
        <input
          type="text"
          placeholder="Phone number"
          value={data?.phone}
          onChange={(e) => {
            setData({ ...data, phone: e.target.value });
            dispatch({ type: "ADD", payload: { phone: e.target.value } });
          }}
          pattern="[789][0-9]{9}"
          required
        />
        <input type="submit" value="Proceed" />
      </form>
    </div>
  );
}

export default StepOne;
