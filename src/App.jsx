import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";

export function App() {
  // step 1
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const isError = Object.values(error).reduce(
    (sum, cur) => (cur.length !== 0 ? true : sum),
    false
  );
  // step 2
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const [conPass, setConPass] = useState("");
  const [conPassError, setConPassError] = useState("");

  // const [step2Error, setStep2Error] = useState(true);

  // app.jsx
  const [step, setStep] = useState(1);
  const isEmpty = Object.values(name).some((val) => val.trim() === "");

  function increaseStep() {
    if (step === 1) {
      if (isError || isEmpty) {
        setError({
          firstName:
            name.firstName.trim() === ""
              ? "First name is required"
              : error.firstName,
          lastName:
            name.lastName.trim() === ""
              ? "Last name is required"
              : error.lastName,
          userName:
            name.userName.trim() === ""
              ? "User name is required"
              : error.userName,
        });
        return;
      }
    }

    if (step === 2) {
      const step2Data = { email, phone, password, conPass };
      const isStep2Empty = Object.values(step2Data).some(
        (val) => val.trim() === ""
      );
      if (isStep2Empty) {
        setEmailError(email.trim() === "" ? "Email is required" : emailError);
        setPhoneError(
          phone.trim() === "" ? "Phone number is required" : phoneError
        );
        setPassError(
          password.trim() === "" ? "Password is required" : passError
        );
        setConPassError(
          conPass.trim() === "" ? "Confirm password is required" : conPassError
        );
        return;
      }
    }
    setStep(step + 1);
  }
  function decreaseStep() {
    setStep(step - 1);
  }
  return (
    <div>
      {step === 1 && (
        <Step1
          increaseStep={increaseStep}
          error={error}
          setError={setError}
          name={name}
          setName={setName}
        />
      )}
      {step === 2 && (
        <Step2
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
          phone={phone}
          setPhone={setPhone}
          phoneError={phoneError}
          setPhoneError={setPhoneError}
          password={password}
          setPassword={setPassword}
          passError={passError}
          setPassError={setPassError}
          conPass={conPass}
          setConPass={setConPass}
          conPassError={conPassError}
          setConPassError={setConPassError}
          // step2Error={step2Error}
          // setStep2Error={setStep2Error}
        />
      )}
      {step === 3 && (
        <Step3 decreaseStep={decreaseStep} increaseStep={increaseStep} />
      )}
      {step === 4 && <Step4 />}
    </div>
  );
}

export default App;
