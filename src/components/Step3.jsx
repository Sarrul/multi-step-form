export function Step3({ decreaseStep, increaseStep }) {
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
            {/* date of birth */}
            <div className="inputBigDiv">
              <div className="flex flex-row">
                <p className="inputTitle">Date of birth</p>
                <p className="star">*</p>
              </div>
              <input type="date" className="input" />
            </div>
            {/* profile image */}
            <div className="inputBigDiv">
              <div className="flex flex-row">
                <p className="inputTitle">Profile image</p>
                <p className="star">*</p>
              </div>
              <input type="file" className="imageInput " />
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row  mt-auto gap-2">
            <button onClick={decreaseStep} className="backBtn">
              back
            </button>

            <button onClick={increaseStep} className="continueBtn w-70">
              Submit 3/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
