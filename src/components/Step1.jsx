import { PineconeLogo } from "../icons/PineconeLogo";

export function Step1({ increaseStep, error, setError, name, setName }) {
  const nameRegex = /^[a-zA-Z]+$/;

  const handleError = (field, value) => {
    setName({ ...name, [field]: value });
    if (!nameRegex.test(value)) {
      setError({ ...error, [field]: "only letters allowed." });
    } else if (value.length < 2) {
      setError({ ...error, [field]: "name must be at least 2 characters." });
    } else if (value.length > 30) {
      setError({ ...error, [field]: "name must be under 30 characters." });
    } else {
      setError({ ...error, [field]: "" });
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
              <div className="description ">
                Please provide all current information accurately.
              </div>
            </div>
            {/* all three input's div */}
            <div className="flex flex-col gap-3 items-start">
              {/* first name big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">First name</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  value={name.firstName}
                  onChange={(e) => handleError("firstName", e.target.value)}
                  className={`input ${
                    error.firstName ? "borderRed" : "borderGray"
                  }`}
                />
                {error.firstName && (
                  <div className="error-message">{error.firstName}</div>
                )}
              </div>
              {/* last name big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Last name</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  value={name.lastName}
                  onChange={(e) => handleError("lastName", e.target.value)}
                  className={`input ${
                    error.lastName ? "borderRed" : "borderGray"
                  }`}
                />
                {error.lastName && (
                  <div className="error-message">{error.lastName}</div>
                )}
              </div>
              {/* user name big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">User name</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  value={name.userName}
                  onChange={(e) => handleError("userName", e.target.value)}
                  className={`input ${
                    error.userName ? "borderRed" : "borderGray"
                  }`}
                />
                {error.userName && (
                  <div className="error-message">{error.userName}</div>
                )}
              </div>
            </div>
          </div>
          <button onClick={increaseStep} className="continueBtn  w-[416px] ">
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
