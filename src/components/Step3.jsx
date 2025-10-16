import { useRef, useState } from "react";
import { ImageUpload } from "../icons/ImageUpload";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ImageDelete } from "../icons/ImageDelete";
import { ChevronRight } from "../icons/ChevronRight";
import { ChevronLeft } from "../icons/ChevronLeft";
export function Step3({
  decreaseStep,
  increaseStep,
  dob,
  setDob,
  dobError,
  setDobError,
  imageError,
  setImageError,
  preview,
  setPreview,
}) {
  const inputFileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setImageError("");
    }
  };
  const handleDeleteBtn = (e) => {
    setPreview(null);
    if (inputFileRef.current) inputFileRef.current.value = "";
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
            {/* date of birth */}
            <div className="inputBigDiv flex justify-between">
              <div className="flex flex-row">
                <p className="inputTitle">Date of birth</p>
                <p className="star">*</p>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type="date"
                  className={`input ${dobError ? "borderRed" : "borderGray"}`}
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                    if (e.target.value) setDobError("");
                  }}
                />
              </div>
              {dobError && <div className="error-message">{dobError}</div>}
            </div>
            {/* profile image */}
            <div className="inputBigDiv">
              <div className="flex flex-row">
                <p className="inputTitle">Profile image</p>
                <p className="star">*</p>
              </div>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  ref={inputFileRef}
                  id="fileInput"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput" className="imageInput">
                  {preview ? (
                    <div className="relative">
                      <img
                        src={preview}
                        alt="preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col justify-center items-center">
                        <ImageUpload />
                        <span>Add Image</span>
                      </div>
                    </>
                  )}
                </label>

                {preview && (
                  <button
                    className="absolute top-1 right-2 rounded-[99px] w-5 h-5 bg-[#202124] z-10 flex items-center justify-center"
                    onClick={handleDeleteBtn}
                  >
                    <ImageDelete />
                  </button>
                )}
              </div>
              {imageError && <div className="error-message">{imageError}</div>}
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row  mt-auto gap-2">
            <button onClick={decreaseStep} className="backBtn">
              <ChevronLeft />
              Back
            </button>

            <button onClick={increaseStep} className="continueBtn w-70">
              Submit 3/3
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
