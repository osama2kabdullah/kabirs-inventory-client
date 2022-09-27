import React from "react";

const AltLogin = () => {
  return (
    <div className="text-center">
      <div class="or-container">
        <div class="line-separator"></div> <div class="or-label">or</div>
        <div class="line-separator"></div>
      </div>
      <div className="mx-auto w-fit">
      <button className="p-1 flex gap-3 items-center rounded-full border">
        <span className="text-red-300 font-bold text-3xl">G</span>
        <span className="pr-3">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AltLogin;
