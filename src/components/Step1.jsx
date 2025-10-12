export function Step1({ increaseStep }) {
  return (
    <div>
      <div className="max-w-screen h-screen mx-0 my-auto p-4 text-center flex justify-center items-center bg-[#f4f4f4]">
        {/* container */}
        <div className="flex flex-col items-start w-120 h-[655px] rounded-lg bg-white p-8 ">
          {/* main */}
          <div className="flex flex-col gap-7">
            {/* header */}
            <div className="flex flex-col w-104 items-start gap-2">
              <div className="bg-[url(./assets/pinecone.png)] w-15 h-15"></div>
              <div className="text-[#202124] text-shadow-[0_4px_4px_rgb(0_0_0_/_0.25)] text-[26px]/[normal] tracking-[-0.78px] font-semibold font-[Inter]">
                Join Us! 😎
              </div>
              <div className="text-[#8e8e8e] text-center text-lg/[normal] font-normal ">
                Please provide all current information accurately.
              </div>
            </div>
            {/* all three input's div */}
            <div className="flex flex-col gap-3 items-start">
              {/* first name big div */}
              <div className="flex flex-col items-start self-stretch my-0 mx-auto gap-2">
                <div className="flex flex-row">
                  <p className="text-[#334155] text-sm/4 font-semibold tracking-[-0.14px] pr-[5px] font-[Inter]">
                    First name
                  </p>
                  <p className="text-[#e14942] text-sm/4 font-semibold tracking-[-0.14px] font-[Inter]">
                    *
                  </p>
                </div>
                <input
                  type="text"
                  className="flex items-center self-stretch p-3 rounded-lg border border-[#0ca5e9] w-104"
                  placeholder="Placeholder"
                />
              </div>
              {/* last name big div */}
              <div className="flex flex-col items-start self-stretch my-0 mx-auto gap-2">
                <div className="flex flex-row">
                  <p className="text-[#334155] text-sm/4 font-semibold tracking-[-0.14px] pr-[5px] font-[Inter]">
                    Last name
                  </p>
                  <p className="text-[#e14942] text-sm/4 font-semibold tracking-[-0.14px] font-[Inter]">
                    *
                  </p>
                </div>
                <input
                  type="text"
                  className="flex items-center self-stretch p-3 rounded-lg border border-[#0ca5e9] w-104"
                  placeholder="Placeholder"
                />
              </div>
              {/* user name big div */}
              <div className="flex flex-col items-start self-stretch my-0 mx-auto gap-2">
                <div className="flex flex-row">
                  <p className="text-[#334155] text-sm/4 font-semibold tracking-[-0.14px] pr-[5px] font-[Inter]">
                    User name
                  </p>
                  <p className="text-[#e14942] text-sm/4 font-semibold tracking-[-0.14px] font-[Inter]">
                    *
                  </p>
                </div>
                <input
                  type="text"
                  className="flex items-center self-stretch p-3 rounded-lg border border-[#0ca5e9] w-104"
                  placeholder="Placeholder"
                />
              </div>
            </div>
          </div>
          <button
            onClick={increaseStep}
            className="flex justify-center items-center gap-1 py-[10px] px-3 rounded-md bg-[#121316] text-white w-[416px] mt-auto"
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}
