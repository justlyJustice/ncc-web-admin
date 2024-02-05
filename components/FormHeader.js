import { facebook, google } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

// import GoogleAuth from "./GoogleAuth";

const FormHeader = ({ title, description, page = "/" }) => {
  return (
    <>
      <Image
        alt="logo"
        className="logo"
        height={300}
        src="/assets/logo.png"
        width={300}
        priority
      />

      <div className="text-contain">
        <h2>{title}</h2>

        <p>
          {description}{" "}
          {/* <span>
            {page === "/" ? (
              <Link href="/sign-up">Sign Up</Link>
            ) : (
              <Link href="/">Sign In</Link>
            )}
          </span> */}
        </p>
      </div>

      {/* <div className="auth-providers">
        <GoogleAuth />

        <button>
          <Image alt="auth-img" className="image" src={facebook} />
          Continue with Facebook
        </button>
      </div> */}

      {/* <div className="seperator">
        <hr />
        <span>or</span>
        <hr />
      </div> */}
    </>
  );
};

export default FormHeader;
