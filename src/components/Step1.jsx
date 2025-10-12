export function Step1({ increaseStep }) {
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
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
              {/* last name big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">Last name</p>
                  <p className="star">*</p>
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Placeholder"
                />
              </div>
              {/* user name big div */}
              <div className="inputBigDiv">
                <div className="flex flex-row">
                  <p className="inputTitle">User name</p>
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
          <button onClick={increaseStep} className="continueBtn  w-[416px] ">
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
