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
      payload: { ...data, stepOne: 1, stepTwo: 1, stepThree: 1 },
    });
  };

  return (
    <div>
      <h2 className="title">Upload image</h2>
      <form onSubmit={handleSubmit} className="form">
        {data?.image ? (
          <span>{data?.image.name}</span>
        ) : (
          <input
            type="file"
            onChange={(e) => {
              setData({ ...data, image: e.target.files[0] });
              dispatch({ type: "ADD", payload: { image: e.target.files[0] } });
            }}
            autoFocus
            required
          />
        )}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default StepOne;
