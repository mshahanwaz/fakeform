import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const StepDiv = styled.div`
  --color: ${(props) => (props.done ? "#00c220" : "grey")};
  p {
    border: 2px solid var(--color);
    background-color: white;
    color: var(--color);
    &:hover,
    &::before {
      background-color: var(--color);
      color: white;
    }
  }
  &::after,
  &::before {
    background-color: var(--color);
  }
`;

function Head() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="head">
      <StepDiv
        className="step"
        done={data.stepOne}
        onClick={() => {
          if (data.firstName && data.lastName && data.age && data.stepOne)
            dispatch({ type: "ADD", payload: { active: 1 } });
          else if (!data.stepOne) {
            // console.log("do nothing");
          } else {
            // console.log(data);
            alert("Fill the current form completely!");
          }
        }}
      >
        <p></p>
      </StepDiv>
      <StepDiv
        className="step"
        done={data.stepTwo}
        onClick={() => {
          if (data.email && data.phone && data.stepTwo)
            dispatch({ type: "ADD", payload: { active: 2 } });
          else if (!data.stepTwo) {
            // console.log("right here in Second only");
          } else alert("Fill the current form completely!");
        }}
      >
        <p></p>
      </StepDiv>
      <StepDiv
        className="step"
        done={data.stepThree}
        onClick={() => {
          if (data.image && data.stepThree)
            dispatch({ type: "ADD", payload: { active: 3 } });
          else if (!data.stepThree) {
            // console.log("right here in Third only");
          } else alert("Fill the current form completely!");
        }}
      >
        <p></p>
      </StepDiv>
    </div>
  );
}

export default Head;
