import "./styles/App.css";
import StepOne from "./form/StepOne";
import StepTwo from "./form/StepTwo";
import StepThree from "./form/StepThree";
import Head from "./components/Head";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state);

  return (
    <div className="app">
      <div className="app-child">
        {!data.stepOne || (data.active === 1 && data.stepOne) ? (
          <>
            <Head />
            <StepOne />
          </>
        ) : !data.stepTwo || (data.active === 2 && data.stepTwo) ? (
          <>
            <Head />
            <StepTwo />
          </>
        ) : !data.stepThree ? (
          <>
            <Head />
            <StepThree />
          </>
        ) : (
          <h3>Submitted successfully!{console.log(data)}</h3>
        )}
      </div>
    </div>
  );
}

export default App;
