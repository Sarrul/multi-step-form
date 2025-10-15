import { useEffect, version } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ChevronRight } from "../icons/ChevronRight";
import { ChevronLeft } from "../icons/ChevronLeft";
export function Step2({
  increaseStep,
  decreaseStep,
  email,
  setEmail,
  emailError,
  setEmailError,
  phone,
  setPhone,
  phoneError,
  setPhoneError,
  password,
  setPassword,
  passError,
  setPassError,
  conPass,
  setConPass,
  conPassError,
  setConPassError,
}) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]+$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d).*$/;

  const handleEmail = (value) => {
    if (!emailRegex.test(value)) {
      setEmailError("Invalid Gmail address.");
    } else {
      setEmailError("");
    }
  };

  const handlePhone = (value) => {
    if (!phoneRegex.test(value)) {
      setPhoneError("phone number should only contain numbers.");
    } else if (value.length !== 8) {
      setPhoneError("phone number should be 8 digits. ");
    } else {
      setPhoneError("");
    }
  };

  const handlePass = (value) => {
    if (!passRegex.test(value)) {
      setPassError("Password must include letters and numbers.");
    } else if (value.length < 6) {
      setPassError("Password must be at least have 6 characters.");
    } else if (value.length > 10) {
      setPassError("Password must be under 10 characters.");
    } else {
      setPassError("");
    }
  };

  const handleConPass = (value) => {
    if (value !== password) {
      setConPassError("Passwords do not match. Please try again.");
    } else {
      setConPassError("");
    }
  };

  return (
    <div>
      <div className="background">
        {/* container */}
        <div className="container">
          {/* main */}
          <div className="flex flex-col gap-7">
            {/* header */}
            <div className="flex flex-col w-104 items-start gap-2">
              <PineconeLogo />
              <div className="joinUs">Join Us! 😎</div>
              <div className="description">
                Please provide all current information accurately.
              </div>
            </div>
            {/* all four input's div */}
            <div className="flex flex-col gap-3 items-start">
              {/* email big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Email</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  className={`input ${emailError ? "borderRed" : "borderGray"}`}
                  placeholder="Placeholder"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value); // update email state
                    handleEmail(value); // validate it
                  }}
                />
                {emailError && (
                  <div className="error-message">{emailError}</div>
                )}
              </div>
              {/* phone number big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Phone number</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  className={`input ${phoneError ? "borderRed" : "borderGray"}`}
                  placeholder="Placeholder"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPhone(value);
                    handlePhone(value);
                  }}
                />
                {phoneError && (
                  <div className="error-message">{phoneError}</div>
                )}
              </div>
              {/* password big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Password</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="password"
                  className={`input ${passError ? "borderRed" : "borderGray"}`}
                  placeholder="Placeholder"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                    handlePass(value);
                  }}
                />
                {passError && <div className="error-message">{passError}</div>}
              </div>
              {/* confirm password big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Confirm password</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="password"
                  className={`input ${
                    conPassError ? "borderRed" : "borderGray"
                  }`}
                  placeholder="Placeholder"
                  value={conPass}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConPass(value);
                    handleConPass(value);
                  }}
                />
                {conPassError && (
                  <div className="error-message">{conPassError}</div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row  mt-auto gap-2">
            <button onClick={decreaseStep} className="backBtn ">
              <ChevronLeft />
              back
            </button>

            <button onClick={increaseStep} className="continueBtn w-70">
              Continue 2/3
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
