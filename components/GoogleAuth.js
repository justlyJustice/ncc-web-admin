import Image from "next/image";
// import { GoogleLogin } from "react-google-login";

import { google } from "@/public/assets";

const GoogleAuth = () => {
  return (
    // <GoogleLogin
    //   clientId="54201905940-j1472f12sism3ihmlpa0djlr6tt3pn4o.apps.googleusercontent.com"
    //   onSuccess={(res) => console.log(res)}
    //   onError={(err) => console.log(err)}
    //   render={(renderProps) => (
    <button>
      <Image alt="auth-img" className="image" src={google} />
      Continue with Google
    </button>
    //   )}
    // />
  );
};

export default GoogleAuth;
