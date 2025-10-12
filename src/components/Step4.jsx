export function Step4() {
  return (
    <div>
      <div className="max-w-screen h-screen mx-0 my-auto p-4 text-center flex justify-center items-center bg-[#f4f4f4]">
        {/* container */}
        <div className="flex flex-col items-start w-120 rounded-lg bg-white p-8 ">
          {/* header */}
          <div className="flex flex-col w-104 items-start gap-2">
            <div className="bg-[url(./assets/pinecone.png)] w-15 h-15"></div>
            <div className="text-[#202124] text-shadow-[0_4px_4px_rgb(0_0_0_/_0.25)] text-[26px]/[normal] tracking-[-0.78px] font-semibold font-[Inter]">
              You're All Set 🔥
            </div>
            <div className="text-[#8e8e8e] text-center text-lg/[normal] font-normal ">
              We have received your submission. Thank you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
