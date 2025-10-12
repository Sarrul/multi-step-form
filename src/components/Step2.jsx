export function Step2({ increaseStep, decreaseStep }) {
  return (
    <div>
      <div className="background">
        {/* container */}
        <div className="container">
          {/* main */}
          <div className="flex flex-col gap-7">
            {/* header */}
            <div className="flex flex-col w-104 items-start gap-2">
              <div className="bg-[url(./assets/pinecone.png)] w-15 h-15"></div>
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
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
              {/* phone number big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Phone number</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
              {/* password big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Password</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
              {/* confirm password big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Confirm password</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row  mt-auto gap-2">
            <button onClick={decreaseStep} className="backBtn ">
              back
            </button>

            <button onClick={increaseStep} className="continueBtn w-70">
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
