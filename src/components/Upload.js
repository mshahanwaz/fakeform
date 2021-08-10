import React, { useState } from "react";
import "./Upload.css";
import Message from "./Message";

function Upload({ data }) {
  const [newData, setNewData] = useState({
    ...data,
    image: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newData.image) {
      setRedirect(true);
    } else alert("Choose an image before submitting!");
  };

  return redirect ? (
    <Message />
  ) : (
    <div className="upload">
      <h2 className="upload-h2">Upload Your Image</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          name="file"
          id="file"
          placeholder="Upload image"
          onChange={(e) =>
            setNewData({
              ...newData,
              image: e.target.files[0],
            })
          }
        />
        <input type="submit" value="Submit" className="upload-form-link" />
      </form>
    </div>
  );
}

export default Upload;
