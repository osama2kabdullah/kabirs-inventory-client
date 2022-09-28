import React from "react";
import auth from "../../firbase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const AltLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  return (
    <div className="text-center">
      <div class="or-container">
        <div class="line-separator"></div> <div class="or-label">or</div>
        <div class="line-separator"></div>
      </div>
      <div className="mx-auto w-fit">
        <button onClick={()=>signInWithGoogle()} className="p-1 flex gap-3 items-center rounded-full border">
          <span className="text-red-300 font-bold text-3xl">G</span>
          <span className="pr-3">Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AltLogin;
